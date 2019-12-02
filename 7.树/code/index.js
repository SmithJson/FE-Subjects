/*
 * @Author: zhangl
 * @Date: 2019-12-02 00:42:26
 * @LastEditTime: 2019-12-02 23:27:02
 * @LastEditors: zhangl
 * @Description: In User Settings Edit
 * @FilePath: /FE-Subjects/7.树/code/index.js
 */

function Tree() {
	// 辅助 Node 类
	function Node(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}

	var root = null;

	// 辅助插入函数
	var insert = function(node, newNode) {
		if (root === null)
			// 没有节点
			root = newNode;
		else {
			// 存在节点
			if (node.value > newNode.value) {
				// 添加到左分支
				if (node.left === null) node.left = newNode;
				else insert(node.left, newNode);
			} else if (node.value < newNode.value) {
				// 添加到右分支
				if (node.right === null) node.right = newNode;
				else insert(node.right, newNode);
			}
		}
	};
	// 插入
	this.insert = function(value) {
		var newNode = new Node(value);

		insert(root, newNode);
	};

	// 查找
	this.search = function() {};

	var max = function(node) {
		if (node === null) return false;

		while (node && node.right) {
			node = node.right;
		}

		return node;
	};
	// 查询最大数
	this.max = function() {
		return max(root);
	};

	var min = function(node) {
		if (node === null) return false;

		while (node && node.left) {
			node = node.left;
		}

		return node;
	};
	// 查询最小数
	this.min = function() {
		return min(root);
	};

	var getMinLeftTree = function(node) {
		if (node === null) return false;

		while (node.left) node = node.left;

		return node;
	};
	var removeNode = function(node, value) {
		if (node === null) return false;

		if (node.value > value) node.left = removeNode(node.left, value);
		else if (node.value < value) node.right = removeNode(node.right, value);
		else {
			if (node.left === null && node.right === null) return null;
			if (node.left === null && node.right) return node.right;
			if (node.left && node.right === null) return node.left;

			var minLeftTree = getMinLeftTree(node.right);

			node.value = minLeftTree.value;
			node.right = removeNode(node.right, value);
		}

		return node;
	};
	// 移出
	this.remove = function(value) {
		/**
		 * 1. 删除的节点没有子节点, 直接删除
		 * 2. 删除的节点存在一个节点, 将存在的节点替换为删除节点
		 * 3. 删除的节点存在两个节点, 将右子树的最小节点替换为删除节点
		 */
		root = removeNode(root, value);

		return root;
	};

	// 辅助遍历函数
	var traverse = function(root, callback) {
		if (root === null) return false;

		traverse(root.left, callback);
		traverse(root.right, callback);
		callback(root);
	};
	// 遍历
	this.traverse = function(callback) {
		// 后序遍历: 左右根
		traverse(root, callback);
	};

	// 获取根节点
	this.root = function() {
		return root;
	};
}
