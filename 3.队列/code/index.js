/*
 * @Author: zhangl
 * @Date: 2019-09-26 18:16:57
 * @LastEditors: zhangl
 * @LastEditTime: 2019-09-26 19:39:15
 * @Description: 队列模拟
 */
var Queue = function () {
    var items= [];

    // enqueue：入队
    this.enqueue = function (element) {
        items.push(element);
    };

    // dequeue：出队
    this.dequeue = function () {
        return items.shift();
    };

    // front：查看队列头
    this.front = function () {
        return items[0];
    };

    // isEmpty：检查队列是否为空
    this.isEmpty = function () {
        return items.length === 0;
    };

    // size：查看队列大小
    this.size = function () {
        return items.length;
    };
};

// 优先队列
var PriorityQueue = function () {
    var items = [];

    // 辅助类
    function Priority(element, priority) {
        this.element = element;
        this.priority = priority;
    }

    // 入队
    this.enqueue = function (element, priority) {
        var isAdd = false; // 是否添加
        var p = new Priority(element, priority);

        for (var i = 0; i < items.length; i++) {
            if (p.priority > items[i].priority) {
                items.splice(i, 0, p);
                isAdd = true;
                break;
            }
        }
        if (!isAdd) { // 没有添加则插入到队列尾
            items.push(p);
        }
    }

    // 获取队列
    this.getItems = function () {
        return items;
    };
};