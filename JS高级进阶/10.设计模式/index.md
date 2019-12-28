# 设计模式

[toc]

## 浅拷贝

### 数组

1. for
2. concat
3. 扩展运算符
4. Array.from
5. slice

### 对象

1. for
2. Object.assign
3. 扩展运算符

## 深拷贝

1. JSON.parse
2. 遍历递归实现深拷贝
```javascript
 function extendDeep(source) {
    var target = Array.isArray(target) ? [] : {};

    if (typeof source !== 'object') { // 原始数据类型
        return source;
    }

    for (var key in source) {
        if (source[key] && typeof source[key] === 'object') { // object, array
            target[key] = extendDeep(source[key]);
        } else { // function
            target[key] = source[key];
        }
    }

    return target;
}

var newObj = extendDeep(obj);
newObj.hobbies[1] = 'aaaa';
newObj;
obj;
```

## 设计模式

目的：帮助我们写出可复用和可维护性高的程序

1. 单一职责原则(S)：一个对象或者方法只做一件事
2. 开发-封闭原则(O)：对变的内容开放，对不变的内容封闭

### 单例模式

确保只有一个实例

```javascript
 // 把变的部分封装，不变的隔离
function createWindow(dom) {
    var newDom = document.createElement(dom);

    newDom.innerHTML = '单例模式';
    newDom.style.display = 'none';
    document.body.appendChild(newDom);

    return newDom;
};

function createElement(fn) {
    var ele;

    return function () {
        if (!ele) {
            ele = fn.apply(this, arguments);
        };

        return ele;
    }
}


var fun01 = createElement(createWindow);

document.getElementsByTagName('button')[0].onclick = function () {
    var el = fun01('p');

    el.style.display = 'block';
}
```