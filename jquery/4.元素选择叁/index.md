# jQuery实例方法 - DOM操作二 {ignore=true}

[toc]

## .not()

过滤没有指定jQ元素

- css选择器

```javascript
// 选中类名为demo，li元素除外
$('.demo').not('li')
```

## .and()

集中操作

- css选择器

```javascript
$('.wrapper')
    .add('ul')
    .css({ backgroundColor: 'red' })
```

## .end()

回退操作

```javascript
$('.wrapper')
    .css({ position: 'relative' })
    .find('ul')
    .css({ position: 'absolute' })
    .end()
    .css({ position: 'absolute' })
```