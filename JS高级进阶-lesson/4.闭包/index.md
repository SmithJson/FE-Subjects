# 闭包 {ignore=true}

[toc]

## this指向

1. 作为对象的方法调用
    指向对象本身
2. 作为普通函数调用
    指向window对象
3. 在构造器中调用


## call和apply

修改this指向，同时立即执行函数

call和apply的区别：参数不同

- call：参数单个参数
- apply：参数为数组

### 作用

- 修改this指向
- Function：bind
- 借用其他对象的方法


## bind

返回修改this指向过后的函数，不会立即执行

## 闭包特点

1. 函数嵌套

```javascript
function getName() {
    var count = 0;
    function bs() {
        count++;
        console.log(count);
    }
    return bs;
}

var c1 = getName();
```

2. 函数内部可以引用外部的参数和变量
3. 参数和变量不会被垃圾回收机制回收，而是保存在内存中

**好处：**

1. 希望变量存在缓存中
2. 避免全局污染
3. 私有成员