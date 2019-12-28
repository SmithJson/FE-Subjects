## Map 数据类型

map 是 ES6 新题出的引用数据类型，类似于对象（也是键值）

对象作为属性名，传输的是引用地址

与对象的区别：

- 对象的键名是字符串类型的；map 的键名可以是任何数据类型

## 声明 Map 数据结构

```javascript
const map = new Map();
const o = {
    name: 'zhangl'
};
map.set(o, 'content');
console.log(map.get(o));
```

## 证明是引用数据类型

```javascript
console.log(map instanceof Map); // true
console.log(Object.prototype.toString.call(map)); // "[object Map]"
```

## Map 接受数据作为参数的本质

```javascript
const arr = [
    ['name', 'zhangl'],
    [3 > 1, 'yeah'],
];
arr.forEach(([key, value]) => console.log(key, value));
```

## Map 参数的扩展

```javascript
具有迭代器 iterator 接口，每个成员都是双元素的数组的数据结构，都可以当 map 构造函数
```

## for...of 循环

使用 for...of 的原因：Map、Set 等数据结构，需要使用一个同一的接口去处理，iterator 就是提供一一种机制

作用：部署了 iterator 接口，就可以使用 for...of 循环遍历

## for...of执行过程

1. 创建一个指针对象，指向数据的初始位置，iterator 就是一个指针对象
2. 第一次调用指针对象 .next()，将指针指向第一个成员
3. ...
4. 直到结束

!!! 每一次调用指针对象，都会返回 value(当前遍历的值)，done(是否遍历完成)

```javascript
const arr = [1, 2, 3];
const makeIterator = function (arr) {
    let index = 0;
    return {
        next: function () {
            let isDone = arr.length > index;

            return isDone
                ? {
                    value: arr[index++],
                    done: false,
                }
                : {
                    value: arr[index++],
                    done: true,
                };
        }
    };
};

const res = makeIterator(arr);
console.log(res.next());
console.log(res.next());
console.log(res.next());
console.log(res.next());
```

## 原生具有 iterator 接口的对象

```javascript
Map Set String Argument
```

## 对象实现 for...of 遍历

```javascript
// 第一种方法实现
const obj = {
    data: [1, 2, 3],
    [Symbol.iterator]() {
        let nextIndex = 0;
        const self = this;

        return {
            next() {
                const data = self.data;
                const isDone = nextIndex >= data.length;

                return {
                    value: data[nextIndex++],
                    done: isDone,
                };
            },
        };
    },
};

for (const iterator of obj) {
    console.log(iterator);
}

// 对象用 for...of 遍历，怎么实现、Generator
Object.prototype[Symbol.iterator] = function* () {
    for (const [key, value] of Object.entries(this)) {
        yield { key, value };
    }
};

const obj = {
    name: 'zhangl',
    age: 19,
};

for (const iterator of obj) {
    console.log(iterator);
}
```