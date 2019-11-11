# 实例方法-动画 {ignore=true}

[toc]

## .show() .hide()

将 jQ 元素显示/隐藏

- 延迟数
- 运动方式
- 回调函数

```javascript
$('p').hover(function () {
    $(this)
        .next()
        .show(300, 'swing');
}, function () {
    $(this)
        .next()
        .hide(300, 'linear');
});
```

## .toggle()

jQ 元素显示/隐藏切换

- 延迟数
- 运动方式
- 回调函数

```javascript
$('p').click(function () {
    $(this)
        .next()
        .toggle(300);
});
```

## .fadeIn() .fadeOut()

jQ 元素淡入/谈出

- 延迟数
- 运动方式
- 回调函数

```javascript
$('p').hover(function () {
    $(this)
        .next()
        .fadeIn(300, 'swing', function () {
            console.log('fadeIn');
        });
}, function () {
    $(this)
        .next()
        .fadeOut(300, 'linear', function () {
            console.log('fadeIn');
        });
});
```

## .fadeToggle()

jQ 元素的淡入/淡出切换

- 延迟数
- 运动方式
- 回调函数

```javascript
$('p').click(function () {
    $(this)
        .next()
        .fadeToggle(300);
});
```

## .fadeTo()

jQ 元素淡入到

- 延迟数
- 透明度
- 运动方式
- 回调函数

```javascript
$('p').click(function () {
    $(this)
        .next()
        .fadeTo(300, 0.5, 'linear', function () {
            console.log('fadeTo');
        });
});
```

## .slideDown() .slideUp()

jQ 元素向下卷入

- 延迟数
- 运动方式
- 回调函数

```javascript
$('p').hover(function () {
    $(this)
        .next()
        .slideDown(300, 'swing');
}, function () {
    $(this)
        .next()
        .slideUp(300, 'linear');
})
```

## .slideToggle()

jQ 元素卷入/卷曲切换

- 延迟数
- 运动方式
- 回调函数

```javascript
$('p').click(function () {
    $(this)
        .next()
        .slideToggle(300, 'linear', function () {
            console.log('slideToggle');
        });
})
```