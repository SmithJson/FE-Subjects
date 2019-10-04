/*
 * @Author: zhangl
 * @Date: 2019-10-03 17:12:42
 * @LastEditors: zhangl
 * @LastEditTime: 2019-10-04 12:41:08
 * @Description: 集合
 */

var Set2 = function () {
    var items = {};

    // has：检测元素是是否存在
    this.has = function (value) {
        return items.hasOwnProperty(value);
    };

    // add：添加元素（集合不重复）
    this.add = function (value) {
        if (!this.has(value)) {
            items[value] = value;
            return true;
        }
        return false;
    };

    // remove：移除元素
    this.remove = function (value) {
        if (this.has(value)) {
            delete items[value];
            return true;
        }
        return false;
    };

    // size：获取集合大小
    this.size = function () {
        return Object.keys(items).length;
    };

    // clear：清空集合
    this.clear = function () {
        items = {};
        return true;
    };

    // values：提取集合全部值并以数组返回
    this.values = function () {
        var values = [];

        for (var key in items) {
            if (items.hasOwnProperty(key)) {
                values.push(items[key]);
            }
        }
        return values;
    };

    // union：并集
    this.union = function (otherSet) {
        var result = new Set2();
        var setArr = otherSet.values();
        var thisArr = this.values();

        for (var i = 0; i < setArr.length; i++) {
            result.add(setArr[i]);
        }
        for (var j = 0; j < thisArr.length; j++) {
            result.add(thisArr[j]);
        }

        return result;
    };

    // intersection：交集
    this.intersection = function (otherSet) {
        var result = new Set2();
        var thisArr = this.values();

        for (var i = 0; i < thisArr.length; i++) {
            if (otherSet.has(thisArr[i])) {
                result.add(thisArr[i]);
            }
        }

        return result;
    };

    // difference：差集
    this.difference = function (otherSet) {
        var result = new Set2();
        var thisArr = this.values();

        for (var i = 0; i < thisArr.length; i++) {
            if (!otherSet.has(thisArr[i])) {
                result.add(thisArr[i]);
            }
        }

        return result;
    };

    // getItems
    this.getItems = function () {
        return items;
    };
};
