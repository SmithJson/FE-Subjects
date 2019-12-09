# let var const {ignore=true}

[toc]

## let const

不存在变量提示

```javascript
/**
 * 1. 全程扫描一下错误
 * 2. 预编译环节
 *
*/
console.log(a); // undefined

var a = 123;

// es6
console.log(b); // 报错
let b = 456;
console.log(b);
```

## 暂时性死区

```javascript
var temp = 890;
if (true) {
    temp = 'abc';
    let temp;
}
```

## typeof 不再是百分百不报错

```javascript
typeof c;
let c = 123;
```

## 不允许重复声明

```javascript
let a = 123;
let a = 456;
```

## 块级作用域

模块间互不影响

全局变量污染

```javascript
// ES5
var a = '全局';
(function () {
    var a = '局部';
    console.log(a);
}());

// ES6
let a = '全局';
{
    let a = '局部';
    console.log(a);
}
console.log(a);
```

## 允许作用域的任意嵌套

```javascript
{
    {
        let b = '局部';
        {
            console.log(b); // 局部
        }
    }
}

// Lexical declaration cannot appear in a single-statement context
if (true) let a = 123; // 报错
```

## 声明的常量不能修改

**本质：不能变的是指向存储数据空间的引用**

```javascript
// assignment to constant variable
const a = 123;
a = '123';
```

## 冻结对象

```javascript
const obj = Object.freeze({ name: 'zhangl' });
obj.name = 'zl';
console.log(obj.name); // zhangl
```

## 全局缺陷

在全局作用域下声明的变量会默认作为 windows 对象的属性，可能会覆盖 windows 内置的一些属性，但使用 let、const 声明的变量会与 window 的属性脱钩

```javascript
// ES5
console.log(window.Array);
var Array = '这是数组';
console.log(window.Array);
var a = '123';
console.log(window.a); // 123
// ES6
let b = 123;
console.log(window.b); // undefined
```

## 数组解构赋值

```javascript
let arr = [1, 2, 3];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

let [a, b, c] = arr;
console.log(a);
console.log(b);
console.log(c);
```

## 模式匹配

等号两端的模式相同，左边的变量就会被赋予对应的值

```javascript
const [a, [[b]], c] = [1, [[2]], 3];
console.log(a);
console.log(b);
console.log(c);
```

## 不完全解构

```javascript
const [a, b, c] = [1, 2, 3, 4];
console.log(a);
console.log(b);
console.log(c);
```

## 指定默认值

注意：ES6内部使用 === 判断是否是 undefined，如果是 undefined 才会生效

```javascript
const [flag = true] = [];
console.log(flag); // true

const [a = 1] = [null];
const [b = 1] = [undefined];
console.log(a); // null
console.log(b); // undefined
```

## 对象解构赋值

对象的解构和数组不一样，和顺序无关，解构不成功，会返回 undefined

```javascript
const person = {
    name: 'zhangl',
    age: 33,
};
const { age, name } = person;
console.log(name); // 'zhangl'
console.log(age); // 33

// 对象真正被赋值的是后者
// 会先匹配到同名的属性，然后赋值给后面的变量
// const { name } = person; => const { name: name } = person
const { name: name1 } = person;
console.log(name1); // 'zhangl'
```

## 可以取到原型上的属性

```javascript
const person = {
    name: 'zhangl',
    age: 33,
};
const obj1 = {
    gender: 'male',
}

Object.setPrototypeOf(person, obj1);

const { gender } = person;

console.log(gender); // 'male'
```