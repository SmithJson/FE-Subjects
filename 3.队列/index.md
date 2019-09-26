# 队列

## 队列概念、结构、操作

一种先进先出（FIFO）的数据结构

入列（enqueue）：将数据插入到队列尾

出队（dequeue）：将队列头取出

列头（front）：查看列头

## 队列操作实现

### 方法实现

| 方法名 | 操作 |
| :-: | :-: |
| enqueue | 入队 |
| dequeue | 出队 |
| front | 查看队列头 |
| isEmpty | 检查队列是否为空 |
| size | 获取队列长度 |

```javascript
var Queue = function () {
    var items= [];

    // enqueue：入队
    this.enqueue = function (element) {
        items.push(element);
    };

    // dequeue：出队
    this.dequeue = function () {
        return items.shift();
    };

    // front：查看队列头
    this.front = function () {
        return items[0];
    };

    // isEmpty：检查队列是否为空
    this.isEmpty = function () {
        return items.length === 0;
    };

    // size：查看队列大小
    this.size = function () {
        return items.length;
    };
};
```

## 队列案例：击鼓传花

```javascript
var names = ['a', 'b', 'c', 'd', 'e', 'f'];
    var number = 3; // 规则：每三次，淘汰一人，最终只有一位胜利者

    function drumming(names, number) {
        var queue = new Queue();

        // 入队操作
        for (var i = 0; i < names.length; i++) {
            queue.enqueue(names[i]);
        }

        while(queue.size() > 1) {
            for (var j = 0; j < number - 1; j++) {
                queue.enqueue(queue.dequeue());
            }
            var eliminate = queue.dequeue(); // 淘汰人
            console.log('淘汰了-----' + eliminate);
        }

        return queue.dequeue(); // 最终胜利者
    }

console.log('胜利者：' + drumming(names, number));
```