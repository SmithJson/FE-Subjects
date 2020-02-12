/*
 * @Author: zhangl
 * @Date: 2020-02-13 00:14:40
 * @LastEditors  : zhangl
 * @LastEditTime : 2020-02-13 00:40:20
 * @GitHub: https://github.com/SmithJson
 * @FilePath: /FE-Subjects/前端算法/1.链表/链表逆置.js
 * @Description: 链表的逆置
 */
function Node(value) {
    this.value = value;
    this.next = null;
}

var node1 = new Node(1);
var node2 = new Node(2);
var node3 = new Node(3);
var node4 = new Node(4);
var node5 = new Node(5);

node1.next = node2
node2.next = node3
node3.next = node4
node4.next = node5

function reverseLink(root) {
    if (root.next.next === null) {
        root.next.next = root;
        return root.next;
    } else {
        var result = reverseLink(root.next);
        root.next.next = root;
        root.next = null;
        return result;
    }
}

var result = reverseLink(node1);

function recursiveTraverseLink(root) {
    if (root == null) {
        return;
    }
    console.log(root.value);
    recursiveTraverseLink(root.next);
}

recursiveTraverseLink(result);
