/*
 * @Author: zhangl
 * @Date: 2020-02-15 23:41:27
 * @LastEditors: zhangl
 * @LastEditTime: 2020-02-15 23:41:27
 * @GitHub: https://github.com/SmithJson
 * @FilePath: /FE-Subjects/前端算法/5.二叉树的遍历/还原二叉树（前+中）.js
 * @Description: 前序 + 中序还原二叉树，输出后序
 */
function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}
var preOrderList = ['A', 'C', 'F', 'G', 'B', 'D', 'E'];
var inOrderList = ['F', 'C', 'G', 'A', 'D', 'B', 'E'];

function restoreBinaryTree(preOrder, inOrder) {
   if (preOrder === null || inOrder === null || preOrder.length === 0 || inOrder.length === 0||
        preOrder.length !== inOrder.length) {
            return null;
    }
    var root = new Node(preOrder[0]);
    var index = inOrder.indexOf(root.value); // 获取根节点的在中序列表中位置
    var preOrderLeft = preOrder.slice(1, index + 1); // 获取前序列表中的左子树
    var preOrderRight = preOrder.slice(index + 1, preOrder.length); // 获取前序列表的右子树
    var inOrderLeft = inOrder.slice(0, index); // 获取中序列表的左子树
    var inOrderRight = inOrder.slice(index + 1, inOrder.length); // 获取中序列表的右子树
    root.left = restoreBinaryTree(preOrderLeft, inOrderLeft);
    root.right = restoreBinaryTree(preOrderRight, inOrderRight);
    return root;
}

var binaryTree = restoreBinaryTree(preOrderList, inOrderList);

function postOrderTraverse(root) {
   if (root === null) {
       return;
   }
   postOrderTraverse(root.left);
   postOrderTraverse(root.right);
   console.log(root.value);
};

postOrderTraverse(binaryTree);
