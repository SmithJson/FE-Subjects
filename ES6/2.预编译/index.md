# 字符串的扩展方法 {ignore = true}

[toc]

## 预编译

```javascript
函数预编译
1. 创建一个 AO 对象
2. 提取变量与形参，将变量与形参作为 AO 属性，赋值为 undefined
3. 形参和实参相统一
4. 提取函数声明，将函数函数作为 AO 对性，并将函数作为该属性的值

全局预编译
1. 创建 GO 对象
2. 提取全局变量，将变量作为 GO 对象的属性，值为 undefined
3. 提取函数声明，将函数声明作为 GO 对象的属性，并将函数作为该属性的值
```

## 简便换行和嵌套变量

```javascript
const str = `
    ES6
    模块字符串换行
`;
const a = '变量';
const newA = `我是 ${a}`;
```

## 调用函数

```javascript
const fn = function () {
    console.log('我是字符串里的函数调用');
};
const newA = `${fn()}`;
```

## 模板字符串嵌套

```javascript
const a = `
    我是
    ${[1, 2, 3].map(item => item)}
`;
```

## includes、startWidth、endsWidth

- includes：查看是否包含
- startWidth：是否以某个字符开头
- endsWidth：是否以某个字符结尾

```javascript
// 参数1为匹配的内容
// 参数2为匹配开始的索引位置
const str = 'Hello World';
console.log(str.includes('e')); // true
console.log(str.startsWith('Hello')); // true
console.log(str.endsWith('World')); // true
```

## repeat

重复字符串

```javascript
const str = '1';
console.log(str.repeat(2));
```

## padStart、padEnd

填充字符串

```javascript
// 参数1为字符串总长度
// 参数2用于填充的内容
const str = 'x';
console.log(str.padStart(5, 'abcdef')); // abcdx
```

## 展开运算符 ...拆包

```javascript

```

## 用于函数调用

```javascript
function test(a, b, c) {
    console.log(a, b, c);
}

test(...[1, 2, 3]);
```

## 后面可以放表达式

```javascript
const a = 1;
const arr = [
    ...(a > 1 ? ['a'] : [])
];
console.log(arr);
```

## rest 运算符 ...打包

```javascript
// rest 运算符只能放在参数的最后一位
const [a, ...arr] = [1, 2, 3, 4];
console.log(arr); // [2, 3, 4]
```

## Array.from

将类数组或有 iterator 属性的对象转换为数组

与 ES5 的 Array.prototype.call 相比，Array.from 能够处理字体符号

```javascript
const str = '🍎🍎🍎🍎🍎🍎🍊🍊🍊🍊🍊🍎🍎';
console.log(Array.from(str));
```

## Array.of

将一组值转换为数组，弥补了数组构造函数的一些缺陷

```javascript
const arr = Array.of(1, 2, 3);
console.log(arr);

const arr2 = Array(3);
arr2 // [empty * 3]; // 长度为三，但内容为空
```

## copyWithin

- 参数1：从该位置开始替换数组
- start：从该位置开始读取数据
- end： 数据读取结束

```javascript
const arr = [1, 2, 3, 4, 5, 6];
console.log(arr.copyWithin(0, 3)); // [4, 5, 6, 4, 5, 6]
```

## find

返回第一个符合表达式的值

```javascript
const arr = [1, 2, 3, 4];
console.log(arr.find(item => item < 3)); // 1
```

## findIndex

返回第一个符合表达式的索引，无返回 -1

```javascript
const arr = [1, 2, 3, 4];
console.log(arr.find(item => item < 3)); // 0
```