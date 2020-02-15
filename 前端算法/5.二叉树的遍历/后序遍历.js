/*
 * @Author: zhangl
 * @Date: 2020-02-15 20:35:47
 * @LastEditors: zhangl
 * @LastEditTime: 2020-02-15 20:35:47
 * @GitHub: https://github.com/SmithJson
 * @FilePath: /FE-Subjects/前端算法/5.二叉树的遍历/后序遍历.js
 * @Description: 中序遍历 FGCDEBA
 */
function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

var a = new Node('A');
var b = new Node('B');
var c = new Node('C');
var d = new Node('D');
var e = new Node('E');
var f = new Node('F');
var g = new Node('G');

a.left = c;
a.right = b;
c.left = f;
c.right = g;
b.left = d;
b.right = e;

function postTraverse(root) {
    if (root === null) {
        return;
    }
    postTraverse(root.left);
    postTraverse(root.right);
    console.log(root.value);
}

postTraverse(a);
