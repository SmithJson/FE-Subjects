var Tree = function () {
    // 节点辅助类
    var Node = function (value) {
        this.value = value;
        this.left = null;
        this.right = null;
    };
    var root = null;
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

    this.insert = function (value) {
        var newNode = new Node(value);

        if (root === null) {
            root = newNode;
        } else {
            insertNode(root, newNode);
        }
    };

    this.getRoot = function () {
        return root;
    };

};