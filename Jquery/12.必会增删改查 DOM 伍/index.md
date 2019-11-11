# 必会增删改查DOM操作-5 {ignore=true}

[toc]

## .wrap()

给 jQ 元素添加一个父元素

- html 字符串
- jQ 对象
- DOM 对象
- function

```javascript
$('.wrapper').wrap('<div class="wrapper-p"></div>');

$('.wrapper').wrap($('.other-wrapper'));

$('.wrapper').wrap('.other-wrapper');

$('.wrapper').wrap(function (index) {
    return '<div></div>';
});
```

## .wrapInner()

给 jQ 元素的子元素添加一个父元素

- html 字符串
- jQ 对象
- DOM 对象
- function

```javascript
$('.wrapper').wrapInner('<div></div>');
```

## .wrapAll()

将所有匹配的 jq 元素添加一个父元素, 以第一个匹配到的元素位置为准

- html 字符串
- jQ 对象
- DOM 对象
- function

```javascript
$('span').wrapAll('<div class="wrapper2"></div>');
```

## .unWrap()

删除 jq 元素的父元素

- html 字符串
- jQ 对象
- DOM 对象
- function

```javascript
$('span').unwrap($('.wrapper'));
```