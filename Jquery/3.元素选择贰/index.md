# jQuery实例方法 - DOM操作二 {ignore=true}

[toc]

## .filter()

jQ元素过滤

- css选择器
- function

```javascript
// css选择器
$('.wrapper ul li')
    .filter(':even')
    .css({ color: 'red' })

// function
$('.wrapper ul')
    .filter(function (index, ele) {
        return index % 2 === 0;
    })
    .css({ color: 'red' })
```

## .find()

获取指定jQ元素

- css选择器
- function

```javascript
$('.wrapper ul')
    .find('li:even')
    .css({ color: 'red' })
```

## .is()

判断jQ元素与指定元素是否有交集

- css选择器

```javascript
$('.demo-box').click(function (e) {
    if ($(e.target).is('li')) {
        alert($(e.target).text());
    } else {
        alert($(this).text());
    }
});
```

## .has()

获取包含指定元素的jQ元素

- css选择器

```javascript
// 获取包含ul元素的li
$('li')
    .has('ul')
    .css({ backgroundColor: 'red' })
```