# 动画 {ignore=true}

[toc]

## .animate()

jQ 元素运动

- target 目标点
- duration 运动时间
- easing 运动方式
- callback 运动完成回调函数

```javascript
$('.demo').on('click', function () {
    $(this)
        .animate({
            width: '+=50',
            height: '+=50',
            left: '+=100',
            top: '+=100',
        }, 1000, 'swing')
        .animate({
            width: '+=50',
            height: '+=50',
            left: '+=100',
            top: '+=100',
        }, 1000, 'swing')
});
```

## .stop()

停止 jQ 运动

- 无参数 停止当前运毒，直接到达下一运动的目标点
- true 停止运动
- true true 停止当前动画，并直接到达当前运运动的目标点

```javascript
$('.stop').click(function () {
    $('.demo').stop(true, true);
    $('.demo').stop(true);
    $('.demo').stop();
});
```

## .finish()

停止当前运动，并直接到达最后一个运动的目标点

```javascript
$('.stop').click(function () {
    $('.demo').finish();
});
```

## .delay()

运动延迟

- 延迟数

```javascript
$('.start').on('click', function () {
    $('.demo')
        .animate({
            width: '+=50',
            height: '+=50',
            left: '+=100',
            top: '+=100',
        }, 1000, 'swing')
        .delay(3000)
        .animate({
            left: '+=100',
            top: '-=200',
        }, 1000, 'swing')
});
```

## jQuery.fx.off = true;

关闭 jQ 运动过渡效果，直接到达每次运动的目标点

```javascript
jQuery.fx.off = true;
```