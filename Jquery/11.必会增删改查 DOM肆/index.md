# 必会增删改查DOM操作-4 {ignore=true}

[toc]

## .insertBefore()

将内容插入到 jq 元素之前

- css 选择器
- jQ 元素

```javascript
// 将.box3 插入到.box1 之前
$('.box3').insertBefore('.box1');
$('.box3').insertBefore($('.box1'));
```

## .before()

在 jq 元素之前插入内容

- jQ 元素

```javascript
// 在.box1 之前插入.box3
$('.box1').before($('.box3'));
```

## .insertAfter()

将内容插入到 jq 元素之后

- css 选择器
- jQ 元素

```javascript
// 将.box3 插入到.box1 后
$('.box3').insertAfter('.box1');
$('.box3').insertAfter($('.box1'));
```

## .after()

在 jq 元素之后插入内容

- jQ 元素

```javascript
// 在 .box1 后插入.box3
$('.box1').after($('.box3'))
```

## .prependTo()

将内容插入到 jQ 元素中首位

- css 选择器
- jQ 元素

```javascript
// 将.box3 插入到.wrapper 容器里的首位
$('.box3').prependTo('.wrapper');
$('.box3').prependTo($('.wrapper'));
```

## .prepend()

在 jQ元素中首位插入内容

- jQ 元素

```javascript
// 在.wrapper 容器的首位插入.box3
$('.wrapper').prepend($('.box3'));
```

## .appendTo()

将内容插入到 jQ 元素中的末尾

- css 选择器
- jQ 元素

```javascript
// 将 box3 插入到.wrapper 容器里的末尾
$('.box3').appendTo('.wrapper');
$('.box3').appendTo($('.wrapper'));
```

## .append()

在 jQ 元素中末尾插入内容

- jQ 元素

```javascript
// 在.wrapper 容器的末尾插入.box3 元素
$('.wrapper').append($('.box3'));
```

## .remove() & .detach()

将内容移除

- jQ 元素

```javascript
// 都是将.box1 移除后, 重新插入到.wrapper 容器里
/** 区别:
    .remove 移除后, 被移除元素上的事件会移除;
    .detach 移除后, 被移除元素上的事件不会被移除
*/
$('.box1')
    .remove()
    .prependTo($('.wrapper'));

$('.box1')
    .detach()
    .prependTo($('.wrapper'));
```

## $

创建 jQ 元素

- html string

```javascript
$('<div>new div</div>');
```



