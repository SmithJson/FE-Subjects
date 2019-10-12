/*
 * @Author: zhangl
 * @Date: 2019-10-12 19:21:49
 * @LastEditors: zhangl
 * @LastEditTime: 2019-10-12 23:40:49
 * @Description: event模块
 */
var event = require('events');
// var event = require('./eventEmitter');

var event = new event();

// 注册事件
event.on('call', function (name, age) {
    console.log('call1', name, age);
});

// 事件提前
event.prependListener('call', function (name, age) {
    console.log('call2', name, age);
});

// 事件注册一次
// event.once('show', function () {
//     console.log('show');
// });

var show = function () {
    console.log('show');
};

event.on('show', show);

// 解除事件
event.removeListener('show', show);

event.on('show', function () {
    console.log('show1');
});

// 执行事件
// event.emit('call');
// event.emit('call');
// event.emit('call');
// event.emit('show');
// event.emit('show');

// 参数传递
event.emit('call', 'zhangl', 18);
event.emit('show');
