# 遍历索引的相关方法（补充）

[toc]

## .each()

遍历 jQ 元素，返回原生的 DOM 元素

```javascript
$('ul li').each(function (index, ele) {
    $(ele)
        .text(index)
        .addClass('demo' + index);
})
```

## .index()

获取 jQ 元素相对于其他兄弟元素位置

- element：获取元素相对于选择器的位置

```javascript
$('.wrapper')
    .children()
    .on('click', function (e) {
        // 当前元素位于所有兄弟元素间的索引
        // console.log($(this).index());

        // 当前元素位于所有 span 元素间的索引
        console.log($('.wrapper span').index(e.target));
    })
```

## .children()

获取 jQ 元素的子元素

```javascript
$('.wrapper').children()
```