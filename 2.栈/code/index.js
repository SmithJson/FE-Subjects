/*
 * @Author: zhangl
 * @Date: 2019-09-25 16:28:26
 * @LastEditors: zhangl
 * @LastEditTime: 2019-09-25 22:30:23
 * @Description: 栈模拟
 */
var Stack = function () {
    var items = []; // 私有变量，所以不绑定在this上

    // push：栈顶添加元素
    this.push = function (element) {
        items.push(element);
    };

    // pop：移除栈顶元素
    this.pop = function () {
        return items.pop();
    };

    // peek：获取重栈元素
    this.peek = function () {
        return items[items.length - 1];
    };

    // isEmpty：检测栈是否为空
    this.isEmpty = function () {
        return items.length === 0;
    };

    // clear：清除栈
    this.clear = function () {
        items.length = 0;
    };

    // size：获取栈的大小
    this.size = function () {
        return items.length;
    };

    // getStack：检测items
    this.getItems = function () {
        return items;
    };
};