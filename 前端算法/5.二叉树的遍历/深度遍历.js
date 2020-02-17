/*
 * @Author: zhangl
 * @Date: 2020-02-17 19:34:17
 * @LastEditors: zhangl
 * @LastEditTime: 2020-02-17 21:44:36
 * @GitHub: https://github.com/SmithJson
 * @FilePath: /FE-Subjects/前端算法/5.二叉树的遍历/深度遍历.js
 * @Description: 深度优先遍历
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
b.left = d;
b.right = e;
c.left = f;
c.right = g;

function deepSearch(root, target) {
    if (root === null) {
        return false;
    }
    if (root.value === target) {
        return true;
    }
    var left = deepSearch(root.left, target);
    var right = deepSearch(root.right, target);
    return left || right;
}

console.log(deepSearch(a, 'A'));
