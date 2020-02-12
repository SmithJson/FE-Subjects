/*
 * @Author: zhangl
 * @Date: 2020-02-12 23:17:43
 * @LastEditors  : zhangl
 * @LastEditTime : 2020-02-12 23:21:27
 * @GitHub: https://github.com/SmithJson
 * @FilePath: /FE-Subjects/前端算法/1.链表/index.js
 * @Description: 链表
 */
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

console.log(a.value);
console.log(a.next.value);
console.log(a.next.next.value);
console.log(a.next.next.next.value);

