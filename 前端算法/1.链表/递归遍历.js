/*
 * @Author: zhangl
 * @Date: 2020-02-12 23:49:44
 * @LastEditors  : zhangl
 * @LastEditTime : 2020-02-12 23:54:11
 * @GitHub: https://github.com/SmithJson
 * @FilePath: /FE-Subjects/前端算法/1.链表/递归遍历.js
 * @Description: 递归遍历
 */
var arr = [1, 2, 3, 4, 5, 6];

function recursiveTraverseArr(arr, i) {
    if (arr == null || arr.length <= i) {
        return;
    }
    console.log(arr[i]);
    recursiveTraverseArr(arr, i + 1);
}

recursiveTraverseArr(arr, 0);

function Node(value) {
    this.value = value;
    this.next = null;
}

var a = new Node(1);
var b = new Node(2);
var c = new Node(3);
var d = new Node(4);

a.next = b;
b.next = c;
c.next = d;

function recursiveTraverseLink(root) {
    if (root == null) {
        return;
    }
    console.log(root.value);
    recursiveTraverseLink(root.next);
}

recursiveTraverseLink(a);