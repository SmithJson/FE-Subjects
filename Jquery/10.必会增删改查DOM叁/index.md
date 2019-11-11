# 必会增删改查DOM操作-3 {ignore=true}

[toc]

## .siblings()

获取jQ元素的兄弟元素

- css选择器

```javascript
$('.wrapper p')
    .eq(1)
    .css({ color: 'red' })
    .siblings()
    .css({ color: 'green' })
```

## .parent()

获取距离jQ元素最近的父元素

- css选择器

```javascript
$('.current')
    .parent()
```

## .parents()

获取jQ元素的父级

- css选择器

```javascript
$('.current')
    .parents()
```

## .closest()

获取距离jQ元素最近的父级元素（从自身还是找起，如果自身符合，那么就获取自己）

- css选择器

```javascript
$('.current')
    .closest('li')
```

## .offsetParent()

获取距离jQ元素最近且有定位的元素

- css选择器

```javascript
$('.current')
    .offsetParent()
```

## slice()

截取jQ元素，[startIndex, endIndex)

- startIndex：开始点索引

- endIndex：结束索引

```javascript
$('.box-1 li')
    .slice(-4, 3)
    .text()
```