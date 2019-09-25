/*
 * @Author: zhangl
 * @Date: 2019-09-25 16:28:26
 * @LastEditors: zhangl
 * @LastEditTime: 2019-09-25 16:53:43
 * @Description: 栈模拟
 */
var Stack = function () {
    var items = []; // 私有变量，所以不绑定在this上

    // push
    this.push = function (element) {
        items.push(element);
    };

    // getStack
    this.getItems = function () {
        return items;
    };
};