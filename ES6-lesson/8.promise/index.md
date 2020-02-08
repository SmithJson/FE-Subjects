## promise是什么？

是 ES6 新提出的异步解决方案

ES5采用回调函数，解决异步

## 以前处理异步的方式

```javascript
function f1(callback) {
    var res = "f1";

    console.log('我是回调的 f1');
    setTimeout(() => {
        callback(res);
    }, 1000);
}

function f2(res) {
    console.log(res);
}

f1(f2);
```

## promise

包含 pending、resolve、reject三个状态，只能从 pending 到 resolve 或 reject，不能反过来，一旦状态变为 reject 或 resolve 就不会在转变

## 基本用法

```javascript
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        const flag = false;

        flag ? resolve('成功') : reject('失败');
    }, 1000);
});

promise1.then(
    res => console.log(res),
    err => console.log(err)
);
```

## promise.then

.then 方法定义在原型上

.then 以后返回一个全新的 promise 对象

```javascript

```

## promise.catch

.catch 捕获 promise 中的异常

promise已经变成 resolve，在捕捉错误无效

```javascript
const promise = new Promise((resolve, reject) => {
    resolve('成功');

    throw new Error('失败');
});

// 输出成功
promise.then(
    res => console.log(res),
    error => console.log(error),
);
```

promise 错误会一直往下冒，直到被捕获

```javascript
const promise = new Promise((resolve, reject) => {
    throw new Error('失败');
});

promise
    .then(res => console.log(res))
    .catch(err => console.log(err));
```

缺点：promise 会吃掉错误

```javascript
const fn = function () {
    return new Promise((resolve, reject) => {
        resolve(v + 2);
    });
};

fn()
    .then(res => console.log(res))
    .catch(error => console.log(error));

setTimeout(() => {
    console.log(123);
}, 1000);
```

## promise.all

一次处理多个 promise，生成一个新的 promise 对象，只有在所有 promise 对像的状态为 resolve，新生成的 promise 对象的状态才为 resolve，否则为 reject

```javascript
const promise1 = new Promise((resolve, reject) => {
    reject('promise1');
});
const promise2 = new Promise((resolve, reject) => {
    resolve('promise2');
});

Promise
    .all([promise1, promise2])
    .then((res) => {
        console.log(res); // ["promise1", "promise2"]
    })
    .catch(err => console.log(err));
```