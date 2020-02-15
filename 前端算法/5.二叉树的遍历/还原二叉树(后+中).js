/*
 * @Author: zhangl
 * @Date: 2020-02-16 00:23:27
 * @LastEditors: zhangl
 * @LastEditTime: 2020-02-16 00:23:27
 * @GitHub: https://github.com/SmithJson
 * @FilePath: /FE-Subjects/前端算法/5.二叉树的遍历/还原二叉树(后+中).js
 * @Description: 后序 + 中序还原二叉树，输出前序
 */
function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

var inOrderList = ['F', 'C', 'G', 'A', 'D', 'B', 'E'];
var postOrderList = ['F', 'G', 'C', 'D', 'E', 'B', 'A'];

function restoreBinaryTree(inOrder, postOrder) {
    if (inOrder === null || postOrder === null || inOrder.length === 0 || postOrder.length === 0 ||
            inOrder.length !== postOrder.length) {
        return null;
    }
    var root = new Node(postOrder[postOrder.length - 1]);
    var index = inOrder.indexOf(root.value);
    var inOrderLeft = inOrder.slice(0, index);
    var inOrderRight = inOrder.slice(index + 1, inOrder.length);
    var postOrderLeft = postOrder.slice(0, index);
    var postOrderRight = postOrder.slice(index, postOrder.length - 1);
    root.left = restoreBinaryTree(inOrderLeft, postOrderLeft);
    root.right = restoreBinaryTree(inOrderRight, postOrderRight);
    return root;
}

var binaryTree = restoreBinaryTree(inOrderList, postOrderList);

function preOrderTraverse(root) {
    if (root === null) {
        return;
    }
    console.log(root.value);
    preOrderTraverse(root.left);
    preOrderTraverse(root.right);
}

preOrderTraverse(binaryTree);
