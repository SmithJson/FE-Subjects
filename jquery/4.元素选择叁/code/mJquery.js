/*
 * @Author: zhangl
 * @Date: 2019-10-11 23:57:42
 * @LastEditors: zhangl
 * @LastEditTime: 2019-10-16 00:15:30
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

    // 将jQuery函数的原型赋值给构造函数原型，让通过init函数创建的对象，能够使用jQuery的方法
    jQuery.prototype.init.prototype = jQuery.prototype;

    w.$ = w.jQuery = jQuery;
})(window)