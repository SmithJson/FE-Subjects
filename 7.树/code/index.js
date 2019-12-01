/**
 * @Author  zhangl
 * @Date  2019/12/2 12:50 AM
 * @LastEditors zhangl
 * @LastEditTime 2019/12/2 12:50 AM
 * @Description 模拟树的实现
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
    var insert = function (node, newNode) {
        if (root === null) // 没有节点
            root = newNode;
        else { // 存在节点
            if (node.value > newNode.value) { // 添加到左分支
                if (node.left === null)
                    node.left = newNode;
                else
                    insert(node.left, newNode);
            } else if (node.value < newNode.value) { // 添加到右分支
                if (node.right === null)
                    node.right = newNode;
                else
                    insert(node.right, newNode);
            }
        }

    };
    // 插入
    this.insert = function (value) {
        var newNode = new Node(value);

        insert(root, newNode);
    };

    // 查找
    this.search = function () {

    };

    // 移出
    this.remove = function () {

    };

    // 遍历
    this.traverse = function () {

    };

    // 获取根节点
    this.root = function () {
        return root;
    };
}

