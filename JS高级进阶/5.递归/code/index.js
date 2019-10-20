/*
 * @Author: zhangl
 * @Date: 2019-10-19 20:05:36
 * @LastEditors: zhangl
 * @LastEditTime: 2019-10-19 20:34:05
 * @Description: 递归
 */
console.time();
var count = {};
function fn(n) {
    if (n < 2) return 1;

    if (count[n]) {
        return count[n];
    } else {
        count[n] = fn(n - 1) + fn(n - 2);
        return count[n];
    }

    // return fn(n - 1) + fn(n - 2);
    // return arguments.callee(n - 1) * arguments.callee(n - 2);
}

console.log(fn(500));
console.timeEnd()