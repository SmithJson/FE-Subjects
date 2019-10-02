/*
 * @Author: zhangl
 * @Date: 2019-10-02 22:29:51
 * @LastEditors: zhangl
 * @LastEditTime: 2019-10-03 01:07:48
 * @Description: 数组扩展方法并应用一
 */

// 数据
var personArr = [
    { name: '王刚', src: './src/img/3.png', des: '脊椎不好', sex: 'male', age: 18 },
    { name: '刘颖', src: './src/img/5.png', des: '我是谁', sex: 'female', age: 28 },
    { name: '王莹莹', src: './src/img/4.png', des: '我很好看', sex: 'female', age: 17 },
    { name: '刘洪波', src: './src/img/1.png', des: '你没有见过的人', sex: 'male', age: 30 },
    { name: '刘飞', src: './src/img/2.png', des: '挂壁你', sex: 'male', age: 25 },
];

// reduceRight模拟
Array.prototype.myReduceRight = function (callback, initialValue) {
    var _arr = this;
    var len = _arr.length;
    var param2 = arguments[2] || window;

    for (var i = len - 1; i >= 0; i--) {
        initialValue = callback.apply(param2, [initialValue, _arr[i], i, _arr]);
    }

    return initialValue;
};

// reduceRight
var newValue = [1, 2, 3, 4].reduceRight(function (prevElement, currentElement, index, self) {
    prevElement += currentElement;
    return prevElement;
}, '');

console.log(newValue);

// reduce模拟
Array.prototype.myReduce = function (callback, initialValue) {
    var _arr = this;
    var len = _arr.length;
    var parm2 = arguments[2] || window; // 这个是自己加的，真实数组 reduce 没有这个参数

    for (var i = 0; i < len; i++) {
        initialValue = callback.apply(parm2, [initialValue, _arr[i], i, _arr]);
    }

    return initialValue;
};

// reduce
// var newValue = [1, 2, 3, 4].reduce(function (prevElement, currentElement, index, self) {
//     prevElement += currentElement;
//     return prevElement;
// }, '');

// console.log(newValue);

// some模拟
Array.prototype.mySome = function (callback) {
    var _arr = this;
    var len = _arr.length;
    var param2 = arguments[1] || window;
    var flag = false;

    for (var i = 0; i < len; i++) {
        if (callback.apply(param2, [_arr[i], i, _arr])) {
            flag = true;
            break;
        }
    }

    return flag;
};

// some
// var flag = personArr.mySome(function (item, index, self) {
//     return item.age > 17; // 判断每个人的年龄是否都大于17
// });

// console.log(flag);

// every模拟
Array.prototype.myEvery = function (callback) {
    var _arr = this;
    var len = _arr.length;
    var param2 = arguments[1] || window;
    var flag = true;

    for (var i = 0; i < len; i++) {
        if (!callback.apply(param2, [_arr[i], i, _arr])) {
            flag = false;
            break;
        }
    }

    return flag;
};

// every
// var flag = personArr.every(function (item, index, self) {
//     return item.age >= 18; // 判断每个人的年龄是否都大于18
// });

// console.log(flag);

// map模拟
Array.prototype.myMap = function (callback) {
    var _arr = this; // 指向方法调用者（被遍历的数组）
    var len = _arr.length; // 数组长度
    var param2 = arguments[1] || window; // callback函数里的this
    var newArr = []; // 存放集中化操作后的元素

    for (var i = 0; i < len; i++) {
        newArr.push(callback.apply(param2, [_arr[i], i, _arr]));
    }

    return newArr;
};

// map
// var newArr = personArr.myMap(function (item, index, self) {
//     // 将每个人的名字加上索引值
//     item.name += index;
//     return item;
// });

// console.log(newArr);

// filter模拟
Array.prototype.myFilter = function (callback) {
    var _arr = this; // 指向方法调用者（被遍历的数组）
    var len = _arr.length; // 数组长度
    var param2 = arguments[1] || window; // callback函数里的this
    var newArr = []; // 存放符合条件的元素

    for (var i = 0; i < len; i++) {
        callback.apply(param2, [_arr[i], i, _arr]) ? newArr.push(_arr[i]) : '';
    }

    return newArr;
};

// filter过滤
// var newArr = personArr.myFilter(function (item, index, self) {
//     // 过滤出性别为女的人
//     if (item.sex === 'female') {
//         return true;
//     } else {
//         return false;
//     }
// });

// console.log(newArr)b

// forEach模拟
Array.prototype.myForEach = function (callback) {
    var _arr = this; // 指向方法调用者（被遍历的数组）
    var len = _arr.length; // 数组长度
    var param2 = arguments[1] || window; // callback函数里的this

    for (var i = 0; i < len; i++) {
        callback.apply(param2, [_arr[i], i, _arr]);
    }
};

// forEach遍历
// personArr.myForEach(function (item, index, self) {
//     // 此时的this，为li伪数组
//     this[index].innerHTML = item.name;
// }, document.getElementsByTagName('li'));
