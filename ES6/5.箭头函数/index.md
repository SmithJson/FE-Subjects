## 函数默认参数

```javascript
function test(x, y = 'i am y') {
    console.log(x); // undefined
    console.log(y); // i am y
}

test();
```

## 函数默认值与解构赋值结合

```javascript
function test({ x, y = 'i am y' } = {}) {
    console.log(x);
    console.log(y);
}

test({ x: 1, y: null });
```

## 函数的作用域会形成一个单独的作用域

```javascript
let x = 1;
// 函数参数作用域
/*
 * 相当于
 * let x = 1
 * {
 *   let y = x;
 *   console.log(y);
 * }
*/
function test(y = x) {
    let x = 2;
    console.log(y); // 1
}

test();
```

## 参数展开运算符打包

```javascript
// 计算 1, 2, 3的合
function test(...rest) {
    let sum = 0;

    for (const iterator of rest) {
        sum += iterator;
    }

    return sum;
}

console.log(test(1, 2, 3));
```

## 严格模式

ES6 函数参数指定了默认值、解构赋值、扩展运算符...内部就不用能用严格模式

## 箭头函数注意点

1. this 指向不在是动态的，指向箭头函数定义时，所处的作用域环境中的 this
2. 不能当构造函数，不能 new 对象
3. 不能在箭头函数内部使用 arguments
4. 不能当做 generator 函数，不能加 yield 命名

## 箭头函数使用场景

- 如果说有一个简短的语句，返回一简单的表达式；函数内部没有 调用 this 引用；也没有自身的引用
- 内部需要调用 var self = this 或者 bind 的时候
- 只要是回调函数 99%，都可以使用箭头函数
