/*
 * @Author: zhangl
 * @Date: 2020-02-12 23:31:26
 * @LastEditors  : zhangl
 * @LastEditTime : 2020-02-12 23:39:40
 * @GitHub: https://github.com/SmithJson
 * @FilePath: /FE-Subjects/前端算法/1.链表/循环遍历.js
 * @Description: 循环遍历
 */
var arr = [1, 2, 3, 4, 5];

function loopTraverseArr(arr) {
    if (arr == null) { // 算法题一旦报错，就白给，很重要！！！
        return;
    }
    var  i = 0;
    var len = arr.length;
    for (;i < len; i++) {
        console.log(arr[i]);
    }
}

loopTraverseArr(arr);

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

function loopTraverseLink(root) {
    var temp = root;
    while(true) {
        if (temp != null) {
            console.log(temp.value);
        } else {
            break;
        }
        temp = temp.next;
    }
}

loopTraverseLink(a);
