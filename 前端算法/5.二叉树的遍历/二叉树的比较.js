/*
 * @Author: zhangl
 * @Date: 2020-02-17 22:10:40
 * @LastEditors: zhangl
 * @LastEditTime: 2020-02-17 22:23:24
 * @GitHub: https://github.com/SmithJson
 * @FilePath: /FE-Subjects/前端算法/5.二叉树的遍历/二叉树的比较.js
 * @Description: 二叉树的比较（左右子树互换后不是同一颗树）
 */
function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

var a1 = new Node('A');
var b1 = new Node('B');
var c1 = new Node('C');
var d1 = new Node('D');
var e1 = new Node('E');
var f1 = new Node('F');
var g1 = new Node('G');

a1.left = c1;
a1.right = b1;
c1.left = f1;
c1.right = g1;
b1.left = d1;
b1.right = e1;


var a2 = new Node('A');
var b2 = new Node('B');
var c2 = new Node('C');
var d2 = new Node('D');
var e2 = new Node('E');
var f2 = new Node('F');
var g2 = new Node('G');

a2.left = c2;
a2.right = b2;
c2.left = f2;
c2.right = g2;
b2.left = d2;
b2.right = e2;

function compareTree(root1, root2) {
    if (root1 === root2) { // 同一颗树
        return true;
    }
    if (root1 !== null && root2 === null || root1 === null && root2 !== null) {
        return false;
    }
    if (root1.value !== root2.value) {
        return false;
    }
    var leftBool = compareTree(root1.left, root2.left);
    var rightBool = compareTree(root1.right, root2.right);
    return leftBool && rightBool;
}

console.log(compareTree(a1, a2));
