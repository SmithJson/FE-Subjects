/*
 * @Author: zhangl
 * @Date: 2020-02-20 23:47:10
 * @LastEditors: zhangl
 * @LastEditTime: 2020-02-21 01:35:29
 * @GitHub: https://github.com/SmithJson
 * @FilePath: /FE-Subjects/前端算法/二叉搜索树/二叉平衡搜索树.js
 * @Description: 二叉平衡搜索树
 */
function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

// var a = new Node('A');
// var b = new Node('B');
// var c = new Node('C');
// var d = new Node('D');
// var e = new Node('E');
// var f = new Node('F');
// var g = new Node('G');
// var h = new Node('H');
// var j = new Node('J');

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.left = f;
// c.right = g;
// d.right = h;
// e.right = j;

var node2 = new Node('2');
var node3 = new Node('3');
var node5 = new Node('5');
var node6 = new Node('6');

// 右单选例子
// node6.left = node3;
// node3.left = node2;
// node3.right = node5;

// 左单选
node2.right = node5;
node5.left = node3;
node5.right = node6;

function getDeep(root) {
    if (root === null) {
        return 0;
    }
    var leftHeight = getDeep(root.left);
    var rightHeight = getDeep(root.right);
    return Math.max(leftHeight, rightHeight) + 1;
}

function isBalance(root) {
    if (root === null) {
        return true;
    }
    var leftHeight = getDeep(root.left);
    var rightHeight = getDeep(root.right);
    if (Math.abs(leftHeight - rightHeight) > 1) {
        return false;
    } else {
        return isBalance(root.left) && isBalance(root.right);
    }
}

function leftRotate(root) {
    if (root === null) {
        return;
    }
    var newRoot = root.right;
    root.right = root.right.left;
    newRoot.left = root;
    return newRoot;
 }

function rightRotate(root) {
    if (root === null) {
        return;
    }
    var newRoot = root.left;
    root.left = root.left.right;
    newRoot.right = root;
    return newRoot;
}

function change(root) {
    if (isBalance(root)) {
        return root;
    }
    if (root.left !== null) {
        root.left = change(root.left);
    }
    if (root.right !== null) {
        root.right = change(root.right);
    }
    var leftDeep = getDeep(root.left);
    var rightDeep = getDeep(root.right);
    if (Math.abs(leftDeep - rightDeep) < 2) {
        return root;
    } else if (leftDeep > rightDeep) { // 左深右浅 右单选
        return rightRotate(root);
    } else if (leftDeep < rightDeep) { // 左浅右深 左单选
        return leftRotate(root);
    }
}

// var newRoot = change(node6);
var newRoot = change(node2);
console.log(isBalance(newRoot));
console.log(newRoot);
