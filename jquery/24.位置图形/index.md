# 位置图形 {ignore=true}

[toc]

## .offset()

设置 offset 值 或 返回 offset 对象，包含距离文档的 left，top 属性

```javascript
// left: 100 + 50, right: 100 + 50
console.log($('.demo').offset());

$('.demo').offset({
    left: 100,
    top: 100,
})
// left: 100, top: 100
console.log($('.demo').offset());
```

## .position()

返回一个对象，包含 元素的 left, top 属性

```javascript
$('.demo').position();
```

## .scrollTop() \| .scrollLeft()

设置或返回 jQ 元素距离顶部/左端动距离

```javascript
$(window).scrollLeft(0);
$(window).scrollTop(0);
```

## .width() \| .height()

获取内容盒的宽度/高度

```javascript
$('.demo').width();
```

## .innerWidth() \| .innerHeight()

从里到外，获取内容盒 + 填充盒的宽度/高度和

```javascript
$('.demo').innerWidth();
```

## .outerWidth() \| .innerHeight()

获取内容盒 + 填充盒 + 边框盒的宽度/高度和

```javascript
$('.demo').outerWidth();

// 当参数为 true 时outerWidth为 内容盒 + 填充盒 + 边框盒 + 外边距的宽度/高度和
$('.demo').outerWidth(true);
```