/*
 * @Author: zhangl
 * @Date: 2019-09-27 11:01:01
 * @LastEditors: zhangl
 * @LastEditTime: 2019-09-27 12:48:37
 * @Description: 链表模拟
 */
var LikedList = function () {
    var length = 0; // 链表长度
    var head = null; // 链表头指针

    // 辅助类
    function Node(element) {
        this.element = element;
        this.next = null;
    }

    // append
    this.append = function (element) {
        var node = new Node(element);
        var current = head; // 当前指针位置

        if (head == null) { // 链表为空
            head = node;
        } else { // 链表不为空，节点插入链表尾
            while(current.head) {
                current = current.next;
            }
            // 循环结束current为最后一个节点
            current.next = node;
            length++;
        }
    };

    // getHead
    this.getHead = function () {
        return head;
    }
};
