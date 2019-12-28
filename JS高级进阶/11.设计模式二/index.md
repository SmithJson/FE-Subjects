# 设计模式二 {ignore}

[toc]

## 代理模式

### 保护代理

```javascript
// 主体
function sendMg(msg) {
    console.log(msg);
}

// 代理
function proxySend(msg) {
    msg = msg.replace(/煤矿/, '')
    sendMg(msg);

proxySend('煤矿，大家好');
```

### 虚拟代理

```javascript
function scrollHandle(name, age) {
    console.log('scroll', name, age);
}

// 代替品
function debounce(fn, delay) {
    var timer = null;

    return function () {
        var args = arguments;
        var _self = this;

        clearInterval(timer);

        timer = setTimeout(function () {
            fn.apply(_self, args);
        }, delay);
    }
}

var proxyFn = debounce(scrollHandle, 300)

document.getElementsByClassName('demo')[0].onclick = function () {
    proxyFn.call(this, 'zhangl', 18);
}
```

### 缓存代理

```javascript
// 缓存代理
function add() {
    var arg = Array.from(arguments);

    return arg.reduce(function (pre, cur) {
        return pre + cur;
    });
}

var proxyAdd = (function () {
    var cache = [];

    return function () {
        var arg = Array.from(arguments).join(',');

        if (cache[arg]) {
            return cache[arg];
        } else {
            var result = add.apply(this, arguments);

            cache[arg] = result;

            return result;
        }

        return result;
    }
})();

var a = proxyAdd(1, 2, 3);
var b = proxyAdd(10, 20, 30, 40);
var c = proxyAdd(10, 20, 30, 40);
var d = proxyAdd(10, 20, 30, 40);
```

## 策略模式

通过一系列算法，适应不同的场景

优势：减少了 if else