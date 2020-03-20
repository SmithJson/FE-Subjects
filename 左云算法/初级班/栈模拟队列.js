/*
 * @Author: zhangl
 * @Date: 2020-03-20 23:17:57
 * @LastEditors: zhangl
 * @LastEditTime: 2020-03-20 23:45:36
 * @GitHub: https://github.com/SmithJson
 * @FilePath: /FE-Subjects/左云算法/初级班/栈模拟队列.js
 * @Description: 栈模拟队列 
 */
function Stack(n) {
    var index = 0;
    this.stack = new Array(n);

    // 获取栈头
    this.peek = function () {
        return this.stack[index - 1];
    };

    // 入栈
    this.push = function (val) {
        if (index === n) {
            throw new Error('stack is full');
        }
        this.stack[index++] = val;
    };

    // 出栈
    this.pop = function () {
        if (index === 0) {
            throw new Error('stack is empty');
        }
        return this.stack[--index];
    };

    // 是否为空
    this.isEmpty = function () {
        return index === 0;
    };
}

function Queue(n) {
    var pushStack = new Stack(n);
    var popStack = new Stack(n);

    // 获取队列头
    this.peek = function () {
        if (popStack.isEmpty()) {
            while (!pushStack.isEmpty()) {
                popStack.push(pushStack.pop());
            }
        }
        return popStack.peek();
    };

    // 入队
    this.push = function (val) {
        pushStack.push(val);
    };

    // 出队
    this.pop = function () {
        if (popStack.isEmpty()) {
            while (!pushStack.isEmpty()) {
                popStack.push(pushStack.pop());
            }
        }
        return popStack.pop();
    }

    // 判断是否为空
    this.isEmpty = function () {
        return popStack.isEmpty() && pushStack.isEmpty();
    };
}

var queue = new Queue(3);
queue.push(1);
queue.push(2);
queue.push(3);

console.log(queue.pop());
console.log(queue.pop());
queue.push(4);
queue.push(5);

while (!queue.isEmpty()) {
    console.log(queue.pop());
}