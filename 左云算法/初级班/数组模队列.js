/*
 * @Author: zhangl
 * @Date: 2020-03-20 21:45:14
 * @LastEditors: zhangl
 * @LastEditTime: 2020-03-20 23:47:28
 * @GitHub: https://github.com/SmithJson
 * @FilePath: /FE-Subjects/左云算法/初级班/数组模队列.js
 * @Description: Do not edit
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
}

var queue = new Queue(3);
queue.push(1);
queue.push(2);
queue.push(3);

console.log(queue.peek())
queue.pop();
queue.push(4);
console.log(queue.peek());
queue.pop();
console.log(queue.peek());