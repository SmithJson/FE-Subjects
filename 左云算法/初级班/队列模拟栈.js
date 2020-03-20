/*
 * @Author: zhangl
 * @Date: 2020-03-20 23:46:08
 * @LastEditors: zhangl
 * @LastEditTime: 2020-03-21 00:53:20
 * @GitHub: https://github.com/SmithJson
 * @FilePath: /FE-Subjects/左云算法/初级班/队列模拟栈.js
 * @Description: 队列模拟栈
 */
function Queue(n) {
    var size = 0;
    var top = 0;
    var end = 0;
    this.queue = new Array(n);

    // 获取队列头
    this.peek = function () {
        return this.queue[top];
    };

    // 入队
    this.push = function (val) {
        if (n === size) {
            throw new Error('queue is full');
        }
        this.queue[end++] = val;
        size++;
        end = end === n ? 0 : end;
    };

    // 出队
    this.pop = function () {
        if (size === 0) {
            throw new Error('queue is empty');
        }
        var result = this.queue[top++];
        size--;
        top = top === n ? 0 : top;
        return result;
    };

    // 队列是为空
    this.isEmpty = function () {
        return size === 0;
    };

    // 获取大小
    this.size = function () {
        return size;
    };
}

function Stack(n) {
    var queue1 = new Queue(n);
    var queue2 = new Queue(n);

    function swap() {
        var temp = queue1;
        queue1 = queue2;
        queue2 = temp;
    }

    // 获取栈头
    this.peek = function () {
        while (queue1.size() >= 2) {
            queue2.push(queue1.pop());
        } 
        var result = queue1.pop();
        queue2.push(result);
        swap();
        return result;
    };

    // 入栈
    this.push = function (val) {
        queue1.push(val);
    };

    // 出栈
    this.pop = function () {
        while (queue1.size() >= 2) {
            queue2.push(queue1.pop());
        }
        var result = queue1.pop();
        swap();
        return result;
    };
    
    // 是否为空
    this.isEmpty = function () {
        return queue1.isEmpty();
    };
}

var stack = new Stack(3);
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.pop());
stack.push(4)
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.isEmpty())