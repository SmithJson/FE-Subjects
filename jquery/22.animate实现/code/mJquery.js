/*
 * @Author: zhangl
 * @Date: 2019-10-11 23:57:42
 * @LastEditors: zhangl
 * @LastEditTime: 2019-11-05 00:40:34
 * @Description: jQuery仿写
 */
;(function (w) {
    function jQuery(selector) {
        return new jQuery.prototype.init(selector);
    }

    // jQuery init函数（将dom转换为jq实例）
    jQuery.prototype.init = function (selector) {
        this.length = 0;

        if (selector == null) {
            return this;
        }

        if (typeof selector === 'string' && selector.indexOf('.') !== -1) { // 类选择器
            var dom = document.getElementsByClassName(selector.slice(1));
        } else if (typeof selector === 'string' && selector.indexOf('#') !== -1) { // ID选择器
            var dom = document.getElementById(selector.slice(1));
        }

        if (selector instanceof Element || dom.length == undefined) { // 不存在length，selector为ID选择器
            this[0] = dom || selector;
            this.length++
        } else { // 存在length, selector为类选择器
            for (var i = 0; i < dom.length; i++) {
                this[i] = dom[i];
                this.length++;
            }
        }
    };

    // 给每个jQ元素添加样式
    jQuery.prototype.css = function (config) {
        for (var i = 0; i < this.length; i++) {
            for (var attr in config) {
                this[i].style[attr] = config[attr];
            }
        }

        return this;
    };

    // 获取指定DOM元素
    jQuery.prototype.get = function (number) {
        return number != null ?
                number >= 0 ? this[number] : this[number + this.length]
                : [].slice.call(this);
    };

    // 获取指定jQ元素
    jQuery.prototype.eq = function (number) {
        var dom = number != null ?
                    number >= 0 ? this[number] : this[number + this.length]
                    : null;

        return this.pushStack(dom);
    };

    // 集中操作
    jQuery.prototype.add = function (selector) {
        var baseObj = this;
        var curObj = jQuery(selector);
        var newObj = jQuery();

        // baseObj和curObj合并为新的newObj
        for (var i = 0; i < curObj.length; i++) {
            newObj[newObj.length++] = curObj[i];
        }

        for (var j = 0; j < baseObj.length; j++) {
            newObj[newObj.length++] = baseObj[j];
        }

        return this.pushStack(newObj);
    };

    // 回退操作
    jQuery.prototype.end = function () {
        return this.prevObj;
    };

    // 栈操作（绑定上一次的jQ元素）
    jQuery.prototype.pushStack = function (dom) {
        if (dom.constructor !== jQuery) { // 不是jQ元素
            dom = jQuery(dom);
        }

        dom.prevObj = this;

        return dom;
    };

    // 事件绑定
    jQuery.prototype.myOn = function (type, handle) {
        for (var i = 0; i < this.length; i++) {
            if (!this[i].cacheEvent) { // 判断jQ 元素第一次使用 on 绑定事件
                this[i].cacheEvent = {};
            }

            if (!this[i].cacheEvent[type]) { // 判断 jQ 元素是绑定过 type 类型的事件
                this[i].cacheEvent[type] = [handle];
            } else {
                this[i].cacheEvent[type].push(handle);
            }
        }
    };

    // 事件触发
    jQuery.prototype.myTrigger = function (type) {
        var params = arguments.length > 1 ? [].slice.call(arguments, 1) : [];
        var _self = this;

        // 遍历执行每个 jQ 元素的事件
        for (var i = 0; i < this.length; i++) {
            if (this[i].cacheEvent) {
                this[i].cacheEvent[type].forEach(function (ele, index) {
                    ele.apply(_self, params);
                });
            }
        }
    };

    // Queue
    jQuery.prototype.myQueue = function () {
        var queueObj = this;
        var queueName = arguments[0] || 'fx';
        var addFunc = arguments[1] || null;
        var len = arguments.length;

        if (len === 1) {
            return queueObj[0][queueName];
        }

        !queueObj[0][queueName]
            ? queueObj[0][queueName] = [addFunc]
            : queueObj[0][queueName].push(addFunc);

        return this;
    };

    jQuery.prototype.myDequeue = function () {
        var self = this;
        var queueName = arguments[0] || 'fx';
        var currFun = (self[0][queueName] || []).shift();
        var next = function () {
            self.myDequeue(queueName);
        };

        typeof currFun === 'function' && currFun(next);
    };

    // delay
    jQuery.prototype.myDelay = function (duration) {
        var queueArr = this[0]['fx'];

        queueArr.push(function (next) {
            setTimeout(function () {
                next();
            }, duration);
        });

        return this;
    };

    // animate
    jQuery.prototype.myAnimate = function (json, callback) {
        var len = this.length;
        var self = this;
        var baseFun = function (next) {
            var times = 0;
            for (var i = 0; i < len; i++) {
                startMove(self[i], json, function () {
                    times++;

                    if (times === len) {
                        callback();
                        next();
                    }
                });
            }
        };

        self.myQueue('fx', baseFun);

        if (self.myQueue('fx').length === 1) {
            self.myDequeue('fx');
        }

        function getStyle(dom, attr) {
            if (window.getComputedStyle) {
                return window.getComputedStyle(dom, null)[attr];
            } else {
                return dom.currentStyle[attr];
            }
        }

        function startMove(dom, attrObj, callback) {
            var iCur = null;
            var iSpeed = null;

            clearInterval(dom.timer);
            dom.timer = setInterval(function () {
                var isStop = true;

                for (var attr in attrObj) {
                    if (attr == 'opacity') {
                        iCur = parseFloat(getStyle(dom, attr)) * 100;
                    } else {
                        iCur = parseInt(getStyle(dom, attr));
                    }
                    iSpeed = (attrObj[attr] - iCur) / 7;
                    iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
                    if (attr == 'opacity') {
                        dom.style.opacity = (iCur + iSpeed) / 100;
                    } else {
                        dom.style[attr] = iCur + iSpeed + 'px';
                    }
                    if (iCur != attrObj[attr]) {
                        isStop = false;
                    }
                }

                if (isStop) {
                    clearInterval(dom.timer);
                    typeof callback === 'function' && callback();
                }
            }, 30);
        }

        return this;
    };

    // 将jQuery函数的原型赋值给构造函数原型，让通过init函数创建的对象，能够使用jQuery的方法
    jQuery.prototype.init.prototype = jQuery.prototype;

    w.$ = w.jQuery = jQuery;
})(window)