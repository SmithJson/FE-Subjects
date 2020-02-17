/*
 * @Author: zhangl
 * @Date: 2020-02-17 21:12:24
 * @LastEditors: zhangl
 * @LastEditTime: 2020-02-17 21:44:51
 * @GitHub: https://github.com/SmithJson
 * @FilePath: /FE-Subjects/前端算法/5.二叉树的遍历/广度遍历.js
 * @Description: 广度优先遍历
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

function breadthSearch(rootList, target) {
    if (rootList === null || rootList.length === 0) {
        return false;
    }
    var chidList = [];
    for (var i = 0; i < rootList.length; i++) {
        if (rootList[i] !== null) {
            console.log(rootList[i].value);
            if (rootList[i].value === target) {
                return true;
            } else {
                chidList.push(rootList[i].left);
                chidList.push(rootList[i].right);
            }
        }
    }
    return breadthSearch(chidList, target);
}

console.log(breadthSearch([a], 'G'));
