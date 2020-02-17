/*
 * @Author: zhangl
 * @Date: 2020-02-18 00:30:53
 * @LastEditors: zhangl
 * @LastEditTime: 2020-02-18 01:13:12
 * @GitHub: https://github.com/SmithJson
 * @FilePath: /FE-Subjects/前端算法/5.二叉树的遍历/二叉树的比较3.js
 * @Description: 二叉树的 diff 算法
 */
function Node(value) {
    this.value  = value;
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
var b2 = new Node('Z');
var c2 = new Node('C');
var d2 = new Node('D');
var e2 = new Node('E');
var f2 = new Node('F');
var g2 = new Node('G');

a2.left = c2;
a2.right = b2;
// c2.left = f2;
c2.right = g2;
b2.left = d2;
b2.right = e2;
d2.right = f2;

var diffList = []; // 获取差异的数组

/**
 * { type: '新增', origin: null, now: root }
 * { type: '删除', origin: root, now: null }
 * { type: '修改', origin: root, now: root2 }
 */

function compareTree(root1, root2, diffList) {
    if (root1 === root2) {
        return diffList;
    }
    if (root1 === null && root2 !== null) {
        diffList.push({ type: '新增', origin: null, now: root2 });
    } else if (root1 !== null && root2 === null) {
        diffList.push({ type: '删除', origin: root1, now: null });
    } else if (root1.value !== root2.value) {
        diffList.push({ type: '修改', origin: root1, now: root2 });
        compareTree(root1.left, root2.left, diffList);
        compareTree(root1.right, root2.right, diffList);
    } else {
        compareTree(root1.left, root2.left, diffList);
        compareTree(root1.right, root2.right, diffList);
    }
}

compareTree(a1, a2, diffList);
console.log(diffList);
