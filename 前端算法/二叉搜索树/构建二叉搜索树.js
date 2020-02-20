/*
 * @Author: zhangl
 * @Date: 2020-02-20 21:27:02
 * @LastEditors: zhangl
 * @LastEditTime: 2020-02-20 22:02:31
 * @GitHub: https://github.com/SmithJson
 * @FilePath: /FE-Subjects/前端算法/二叉搜索树/构建二叉搜索树.js
 * @Description: 二叉搜索树
 */
function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

var arr = [];

for (var i = 0; i < 10000; i++) {
    arr.push(Math.random() * 10000 >> 1);
}

function insertNode(root, value) {
    if (root === null) {
        return;
    }
    if (root.value === value) {
        return;
    }
    if (root.value < value) { // 目标值比当前节点大
        if (root.right === null) {
            root.right = new Node(value);
        } else {
            insertNode(root.right, value);
        }
    } else { // 目标值比当前节点小
        if (root.left === null) {
            root.left = new Node(value);
        } else {
            insertNode(root.left, value);
        }
    }
}

function buildSearchTree(arr) {
    if (root === null || arr.length === 0) {
        return;
    }
    var root = new Node(arr[0]);
    for (var i = 1; i < arr.length; i++) {
        insertNode(root, arr[i]);
    }
    return root;
}

var count1 = 0; // 统计使用遍历查找的次数
var count2 = 0; // 统计通过二叉搜索树查找的次数

function searchByTraverse(arr, target) {
    for (var i = 0; i < arr.length; i++) {
        count1++;
        if (arr[i] === target) {
            return true;
        }
    }
    return false;
}

function searchByTree(root, target) {
    if (root === null) {
        return false;
    }
    count2++;
    if (root.value === target) {
        return true;
    }
    if (root.value < target) {
        return searchByTree(root.right, target);
    } else {
        return searchByTree(root.left, target);
    }
}

var root = buildSearchTree(arr);

console.log(searchByTraverse(arr, 1000), count1);
console.log(searchByTree(root, 1000), count2);
