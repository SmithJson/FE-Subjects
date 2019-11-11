# animate 中的 queue {ignore=true}

[toc]

## .queue()

查看或创建队列

- type 队列类型
- content 队列内容

```javascript
$('.demo')
    .queue('work', function (next) {
        console.log('work1');
        // next：下一个事件，即 work2
        next();
    })
    .queue('work', function (next) {
        console.log('work2');
        next();
    })
    .queue('work', function () {
        console.log('work3');
    });

console.log($('.demo').queue('work'));
```

## .dequeue()

出队

- type 队列类型

```javascript
$('.demo').dequeue('work');
```

## .clearQueue()

清空队列

```javascript
$('.demo').cleanQueue('work');
```
