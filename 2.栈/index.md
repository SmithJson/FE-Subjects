# 栈

## 栈概念、结构、操作

一种后进先出（LIFO）的数据结构

栈底：栈的底部

栈顶：栈的顶部

入栈（push）：将数据存入栈顶

出栈（pop）：将数据从栈顶取出

栈顶元素（peek）：检测当前栈顶元素

特点：出栈和入都在栈顶操作

isEmpty：是否为空

clear：清空栈

size：栈元素的个数

## 栈操作实现

### 方法实现

| 方法名 | 操作 |
| :-: | :-: |
| push | 栈顶添加元素 |
| pop | 栈顶移除元素 |
| peek | 查看栈顶 |
| isEmpty | 检查栈是否为空 |
| clear | 移除全部元素 |
| size | 获取栈长度 |

```javascript
var Stack = function () {
    var items = []; // 私有变量，所以不绑定在this上

    // push：栈顶添加元素
    this.push = function (element) {
        items.push(element);
    };

    // pop：移除栈顶元素
    this.pop = function () {
        return items.pop();
    };

    // peek：获取重栈元素
    this.peek = function () {
        return items[items.length - 1];
    };

    // isEmpty：检测栈是否为空
    this.isEmpty = function () {
        return items.length === 0;
    };

    // clear：清除栈
    this.clear = function () {
        items.length = 0;
    };

    // size：获取栈的大小
    this.size = function () {
        return items.length;
    };

    // getStack：检测items
    this.getItems = function () {
        return items;
    };
};
```

## 栈案例：十进制转二进制

```javascript
 function decimal2Binary(number) {
    var mod = new Stack(); // 保存余数
    var quotient = number; // 取商
    var result = '';

    while(quotient > 0) { // quotient已经没有除到底了
        mod.push(quotient % 2);
        quotient = Math.floor(quotient / 2);
    }

    while(!mod.isEmpty()) {
        result += mod.pop();
    }

    return result;
 }
```

## 递归

不断地调用自身，如果不设置结束条件，会导致栈溢出

```javascript
function app() {
    app();
}

app();
```