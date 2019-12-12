<!--
 * @Author: zhangl
 * @GitHub: https://github.com/SmithJson
 * @Date: 2019-12-12 08:20:29
 * @LastEditTime: 2019-12-13 02:05:02
 * @LastEditors: zhangl
 * @Description: In User Settings Edit
 * @FilePath: /FE-Subjects/ES6/对象的扩展/index.md
 -->
# 对象的扩展 {ignore=true}

[toc]

## 属性的简写

```javascript
const a = 'a';
// 相当于 const obj = { a: 'a' };
const obj = { a };
console.log(obj);
```

## 方法的简写

```javascript
const obj = {
    say() {
        console.log('方法的简写');
    }
};

obj.say();
```

## 属性表达式

```javascript
let key = 'key1';
let obj = {
    [key]: true,
    ['o' + 'b']: 123,
    ['ok']: 456
};
console.log(obj);
```

## super 关键字

super 关键字只能出现在对象的方法中

```javascript
const prototype = {
    food: '西红柿',
};
const obj = {
    food: '黄瓜',
    say() {
        // super === obj.__proto__
        return super.food;
    }
};
Object.setPrototypeOf(obj, prototype);
console.log(obj.say()); // 西红柿
```

## 对象解构赋值

```javascript
let { x, a: a1, ...z } = {
    x: 1,
    y: 2,
    a: 3,
    b: 4,
};
console.log(a1, z);
```

## Symbol 数据类型

JS 第七种数据类型，通过字符串对的值的一种表述，表示独一无二的

```javascript
const s1 = Symbol('我是描述1');
const s2 = Symbol('我是描述1');
console.log(s1, s2, s1 === s2);
```

## Symbol 转换为 String

```javascript
const s1 = Symbol('我是描述1');
console.log(s1.toString());
console.log(String(s1));
```

## Symbol.iterator 属性

对象的 Symbol.iterator 属性，指向该对象默认遍历方法，for...of 循环的时候会调用

```javascript
const obj = {};
let sym1 = Symbol('a');
let sym2 = Symbol('b');
obj[sym1] = 'hello';
obj[sym2] = 'world';
// 获取 Symbol 属性
const arr = Object.getOwnPropertySymbols(obj);
console.log(obj, arr);
```

## 模拟私有属性

```javascript
const private = Symbol('private');
const obj = {
    [private]: '生日',
    age: 18,
};

console.log(Object.keys(obj)); // ['age'];
```

## Set

ES6 新提出的『值值对』引用数据类型，类似于数组，但是成员是唯一的，没有重复的

key === value

Set 数据内部判断机制类似于 ===，NaN 比较特殊

```javascript
const s1 = new Set([1, 2, 3]);
const s2 = new Set([{ name: 'zhangl' }]);
console.log(s1, s2);
```

## 转换为数组

```javascript
const s1 = new Set([1, 2, 3]);
console.log(Array.from(s1));
```

## has、clear、add、delete

```javascript
const s1 = new Set([1, 2, 3]);

console.log(s1.add(4));
console.log(s1.has(4));
console.log(s1.delete(1));
// console.log(s1.clear());
console.log(s1);
```

## forEach

与数组的 forEach 一样

```javascript
const s1 = new Set([1, 2, 3]);
s1.forEach((value, key) => {
    console.log(`${key}：${value}`);
});
```