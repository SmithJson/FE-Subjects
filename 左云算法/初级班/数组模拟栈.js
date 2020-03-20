/*
 * @Author: zhangl
 * @Date: 2020-03-20 21:13:00
 * @LastEditors: zhangl
 * @LastEditTime: 2020-03-20 21:47:26
 * @GitHub: https://github.com/SmithJson
 * @FilePath: /FE-Subjects/左云算法/初级班/数组模拟栈.js
 * @Description: 数组模拟栈
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

var stack = new Stack(5);
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
// stack.push(6);

while (!stack.isEmpty()) {
    console.log(stack.pop());
}