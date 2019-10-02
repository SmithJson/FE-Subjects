# 数组扩展方法并应用一

## 方法列举

<font color="red">提示：对于[1, 2, 3, , 1]这样数组没有填值的情况，以下API会忽略空值处，相当于[1, 2, 3, 1]</font>

### forEach

数组遍历

- callback：遍历回调事件
	+ element：遍历元素
	+ index：遍历元素索引
	+ self：遍历数组本身
- target：callback里的this指向，默认为window

```javascript
// 数据
var personArr = [
    { name: '王刚', src: './src/img/3.png', des: '脊椎不好', sex: 'm' },
    { name: '刘颖', src: './src/img/5.png', des: '我是谁', sex: 'f' },
    { name: '王莹莹', src: './src/img/4.png', des: '我很好看', sex: 'f' },
    { name: '刘洪波', src: './src/img/1.png', des: '你没有见过的人', sex: 'm' },
    { name: '刘飞', src: './src/img/2.png', des: '挂壁你', sex: 'm' },
];

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
personArr.myForEach(function (item, index, self) {
    // 此时的this，为li伪数组
    this[index].innerHTML = item.name;
}, document.getElementsByTagName('li'));
```

### Filter

过滤数组元素，将符合条件的元素组成新数组返回

- callback：遍历回调事件
	+ element：遍历元素
	+ index：遍历元素索引
	+ self：遍历数组本身
- target：callback里的this指向，默认为window

```javascript
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
var newArr = personArr.myFilter(function (item, index, self) {
    // 过滤出性别为女的人
    if (item.sex === 'female') {
        return true;
    } else {
        return false;
    }
});

console.log(newArr);
```

### Map

映射数组元素，返回元素集中化操作后，组成的新数组

- callback：遍历回调事件
	+ element：遍历元素
	+ index：遍历元素索引
	+ self：遍历数组本身
- target：callback里的this指向，默认为window

```javascript
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

// map映射
var newArr = personArr.myMap(function (item, index, self) {
    // 将每个人的名字加上索引值
    item.name += index;
    return item;
});

console.log(newArr);
```

### Every

当且仅当数组元素全部符合条件，返回true；反之，返回false

- callback：遍历回调事件
	+ element：遍历元素
	+ index：遍历元素索引
	+ self：遍历数组本身
- target：callback里的this指向，默认为window

```javascript
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
var flag = personArr.every(function (item, index, self) {
    return item.age >= 18; // 判断每个人的年龄是否都大于18
});

console.log(flag);
```

### Some

只要数组元素有一个符合条件，返回true；反之，返回false

- callback：遍历回调事件
	+ element：遍历元素
	+ index：遍历元素索引
	+ self：遍历数组本身
- target：callback里的this指向，默认为window

```javascript
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
var flag = personArr.mySome(function (item, index, self) {
    return item.age > 17; // 判断每个人的年龄是否都大于17
});

console.log(flag);
```

### Reduce

返回数组元素累计

- callback：遍历回调事件
    + prevElement：上一次累计值
	+ element：遍历元素
	+ index：遍历元素索引
	+ self：遍历数组本身
- initialValue：累计初始值

```javascript
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
var newValue = [1, 2, 3, 4].myReduce(function (prevElement, currentElement, index, self) {
    prevElement += currentElement;
    return prevElement;
}, '');

console.log(newValue); // '1234'
```

### ReduceRight

返回数组元素累计（从右$\rightarrow遍历）

```javascript
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

console.log(newValue); // '4321'
```