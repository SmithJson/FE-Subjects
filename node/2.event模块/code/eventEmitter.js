/*
 * @Author: zhangl
 * @Date: 2019-10-12 19:48:55
 * @LastEditors: zhangl
 * @LastEditTime: 2019-10-12 20:05:01
 * @Description: 模拟event模块
 */
function eventEmitter() {
    this.eventList = {};
}

// 事件注册函数
eventEmitter.prototype.on = function (eventName, cb) {
    if (!this.eventList[eventName]) { // 第一次添加事件
        this.eventList[eventName] = [];
    }

    this.eventList[eventName].push(cb);
};

// 事件执行函数
eventEmitter.prototype.emit = function (eventName) {
    var self = this;
    var args = [].slice.call(arguments, 1);
    var cbArr = self.eventList[eventName];

    (cbArr || []).forEach(function (event) {
        event.apply(self, args);
    });
};

// 事件提前函数
eventEmitter.prototype.prependListener = function (eventName, cb) {
    if (!this.eventList[eventName]) { // 第一次添加事件
        this.eventList[eventName] = [];
    }

    this.eventList[eventName].unshift(cb);
};

module.exports = eventEmitter;