# 迭代器 {ignore=true}

[toc]

## 迭代器模式

可以顺序访问一个聚合对象的各个元素

```javascript
function each(obj, fn) {
    if (Array.isArray(obj)) { // 数组
        for (var i = 0; i < obj.length; i++) {
            fn.call(obj, obj[i], i, obj);
        }
    } else { // 对象
        for (var prop in obj) {
            fn.call(obj, obj[prop], prop, obj);
        }
    }
}

each(
    {
        a: 1,
        b: 2,
        c: 3,
    },
    function (item, index, obj) {
        console.log(item, index, obj);
    }
);

each(
    [10, 20, 30, 50],
    function (item, index, obj) {
        console.log(item, index, obj);
    }
);
```

## 发布-订阅者模式

一对多的依赖关系

```javascript
var eventObj = {
    // 订阅者列表
    list: {},
    // 添加订阅
    listen: function (key, fn) {
        if (!this.list[key]) {
            this.list[key] = [];
        }

        typeof fn === 'function' && this.list[key].push(fn);
    },
    // 发布信息
    trigger: function () {
        var key  = arguments[0] || this;
        var args = [].slice.call(arguments, 1);
        // 订阅事件
        var cbs = this.list[key];

        if (cbs) {
            for (var i = 0; i < cbs.length; i++) {
                var cb = cbs[i];

                cb.apply(this, args);
            }
        }
    },
    // 取消订阅
    removeListen: function (key, fn) {
        var cbs = this.list[key];

        if (!cbs) return;

        var index = cbs.indexOf(fn);

        cbs.splice(index, 1);
    },
};

var ajaxObj = Object.create(eventObj);

ajaxObj.listen('success', function (data) {
    console.log(data);
});

setTimeout(function () {
    ajaxObj.trigger('success', { name: 'zhangl' });
}, 1000);





var fn1 = function (size, num) {
    console.log('小红', size, num);
};

eventObj.listen('red', fn1);
eventObj.listen('red', function (size, num) {
    console.log('小白', size, num);
});
eventObj.listen('red', function (size, num) {
    console.log('小绿', size, num);
});

eventObj.listen('blue', function (size, num) {
    console.log('小灰', size, num);
});
eventObj.listen('blue', function (size, num) {
    console.log('小粉', size, num);
});
eventObj.listen('blue', function (size, num) {
    console.log('小黑', size, num);
});

eventObj.removeListen('red', fn1);
eventObj.trigger('red', 45, 30);
eventObj.trigger('blue', 45, 30);
```
