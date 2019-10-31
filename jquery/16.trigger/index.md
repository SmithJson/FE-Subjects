# trigger 事件触发

[toc]

## .trigger()

主动触发 jQ 事件

- 事件类型
- 数据

```javascript
 $('.demo').on('click', function (e, a, b, c, d) {
            console.log(a, b, c, d);
        });

$('.demo').trigger('click', [10, 20, 30, 40]);

 // 绑定自定义事件
$('.demo').on('pageLoad', function () {
    console.log('pageLoad');
});
// 触发自定义事件
$('.demo').trigger('pageLoad');
```

##  .hover()

jQ 元素绑定鼠标移入和移出事件

- 鼠标移入事件
- 鼠标移出事件

```javascript
$('.demo').hover(function () {
    console.log('mouseenter');
}, function () {
    console.log('mouseleave');
});
```