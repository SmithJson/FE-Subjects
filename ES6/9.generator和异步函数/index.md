# generator 和异步函数 {ignore=true}

[toc]

## generator 函数是什么？

ES6 异步解决方案

执行 generator 函数后会返回一个遍历器对象(`{ value, done }`)

形式与普通函数的区别之一：function关键字和函数名之间存在一个`*`

函数内部使用 yield 表达式，yield 只能在 generator 函数中

yield 如果出现在另外一个表达式中，必须是使用圆括号包裹

```javascript
function* helloGenerator() {
    yield 'hello';
    yield 'world';
    return 123;
}

const res = helloGenerator();
console.log(res.next());

function* fn() {
    console.log('暂缓执行');
}

const res = fn();
console.log(res.next());
```

## 与 iterator 接口的关系

```javascript
Object.prototype[Symbol.iterator] = function* () {
    for (const [key, value] of Object.entries(this)) {
        yield { key, value };
    }
};

const myIterator = {
    name: 'zhangl',
    age: 18,
    gender: 'male',
};

console.log([...myIterator]);
```

## next 参数

yield 本身不包含返回值，返回 undefined

next 可以接受一个参数，这个参数会被当作**上一个yield**的返回值

```javascript
function* helloGenerator() {
    const res1 = yield 123;
        // 这里是第二个 next 的参数
    console.log(res1);
    const res2 = yield 456;
        // 这里是第三个 next 的参数
    console.log(res2);
    const res3 = yield 789;
        // 这里是第四个 next 的参数
    console.log(res3);
}

const res = helloGenerator();
console.log(res.next());
console.log(res.next('第二次'));
console.log(res.next('第三次'));
console.log(res.next('第四次'));
```

## for ... of 循环

```javascript
function* gen() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    return 123;
}

for (const v of gen()) {
    console.log(v);
}
```

## 捕获异常

如果要捕获错误，就必须先 .next 执行

```javascript
// 内部捕获外部异常
function* gen1() {
    try {
        yield;
    } catch(err) {
        console.log(err)
    }
}

const g1 = gen1();
g1.next();
g1.throw('错误1');

// 外部捕获内部错误
function* gen2() {
    yield;
}

const g2 = gen2();
g2.next();

try {
    g2.throw('错误2');
} catch(err) {
    console.log(err)
}
```

## return 用法

```javascript
function* gen() {
    yield 1;
    yield 2;
    yield 3;
}

const g = gen();
console.log(g.next());
console.log(g.return('res')); // 相当于 return，遍历器到这个位置结束
console.log(g.next());
```

## yield * 表达式

在 generator 中调用另一个 generator 时可以使用

```javascript
function* first() {
    yield 2;
    yield 3;
}

function* second() {
    yield 1;
    yield * first();
    yield 4;
}

for (const v of second()) {
    console.log(v);
}
```

## generator 中的 this

```javascript
const gen = function* () {
    this.a = 1;
    yield this.b = 2;
    yield this.c = 3;
};

// generator 对象能从原型上继承属性
const g = gen.call(gen.prototype);
console.log(g instanceof gen); // true
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.a);
console.log(g.b);
console.log(g.c);
```

## 异步请求

```javascript
// 基础请求路径
const baseUrl = 'http://rap2api.taobao.org/app/mock/241170';

function request(url) {
    axios
        .get(url)
        .then(res => result.next(res));
}

function* get() {
    const res = yield request(`${baseUrl}/name`);
    console.log(res);

    const { data } = res;
    const { data: result } = data;
    const [{ id }] = result;

    const res2 = yield request(`${baseUrl}/weapon?id=${id}`);
    console.log(res2);
}

const result = get();
result.next();
```

## async ... await

async 函数执行后，返回一个 promise对象

```javascript
const baseUrl = 'http://rap2api.taobao.org/app/mock/241170';
function request(url) {
    return axios.get(url);
}

async function get() {
    const res = await request(`${baseUrl}/name`);
    console.log(res);
    const { data } = res;
    const { data: result } = data;
    const [{ id }] = result;
    const res2 = await request(`${baseUrl}/weapon?id=${id}`);
    console.log(res2);

    return 123;
}

const result = get();
result.then(res => console.log(res));

// 同时并法执行两个没有相关的接口
async function asyncPromise() {
    const result = await Promise.all([
        request(`${baseUrl}/name`),
        request(`${baseUrl}/weapon?id=1`)
    ]);

    return result;
}

asyncPromise().then(res => console.log(res));
```