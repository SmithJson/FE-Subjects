var Tree = function () {
    // 节点辅助类
    var Node = function (value) {
        this.value = value;
        this.left = null;
        this.right = null;
    };
    var root = null;
    // 插入节点辅助函数
    var insertNode = function (root, newNode) {
        if (root.value > newNode.value) {
            if (root.left === null) {
                root.left = newNode;
            } else {
                insertNode(root.left, newNode);
            }
        } else if (root.value < newNode.value) {
            if (root.right === null) {
                root.right = newNode;
            } else {
                insertNode(root.right, newNode);
            }
        }
    };
    // 遍历树节点
    var traverse = function (node, callback) {
        if (node === null) return false;
        // 后序遍历 左右根
        traverse(node.left, callback);
        traverse(node.right, callback);
        callback(node.value);
    };

    // 插入元素
    this.insert = function (value) {
        var newNode = new Node(value);

        if (root === null) {
            root = newNode;
        } else {
            insertNode(root, newNode);
        }
    };

    // 查询元素
    this.search = function (value) {

    };

    // 遍历元素
    this.traverse = function (callback) {
        traverse(root, callback);
    };

    this.getRoot = function () {
        return root;
    };

};