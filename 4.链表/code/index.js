/*
 * @Author: zhangl
 * @Date: 2019-09-27 11:01:01
 * @LastEditors: zhangl
 * @LastEditTime: 2019-09-27 21:12:02
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
        } else { // 链表不为空，链表尾插入节点
            while(current.head) {
                current = current.next;
            }
            // 循环结束current为最后一个节点
            current.next = node;
        }
        length++;
    };

    // isEmpty
    this.isEmpty = function () {
        return length === 0;
    };

    // size
    this.size = function () {
        return length;
    };

    // remove
    this.remove = function (element) {
        return this.removeAt(this.indexOf(element));
    };

    // indexOf
    this.indexOf = function (element) {
        var index = 0;
        var current = head;

        while(current) {
            if (current.element === element) {
                return index;
            }
            current = current.next;
            index++;
        }

        return -1;
    };

    // removeAt
    this.removeAt = function (position) {
        if (position > -1 && position < length) {
            if (position === 0) {
                var current = head;

                head = current.next;
            } else {
                var current = head;
                var index = 0;
                var previous = null;

                while(index < position) {
                    previous = current;
                    current = current.next;
                    index++;
                }
                previous.next = current.next;
            }
            length--;

            return current;
        }

        return null;
    };

    // insert
    this.insert = function (position, element) {
        if (position > -1 && position < length) {
            var node = new Node(element);

            if (position === 0) { // 第一个位置插入
                var current = head;
                head = node;
                node.next = current;
            } else { // 第n个位置插入
                var index = 0;
                var current = head;
                var previous = null; // 上一个节点

                while(index < position) {
                    previous = current;
                    current = current.next;
                    index++;
                }
                previous.next = node;
                node.next = current;
            }
            length++;
        }
    };

    // getHead
    this.getHead = function () {
        return head;
    }
};
