# 必会增删改查DOM操作-2 {ignore=true}

[toc]

## .next()

获取当前元素的下一个兄弟元素

- css选择器

```javascript
$('.wrapper')
    .next('p')
    .css({ color: 'red' })
```

## .nextAll()

获取当前元素的下面所有兄弟元素

- css选择器

```javascript
$('.wrapper')
    .nextAll()
    .css({ color: 'red' })
```

## .prev()

获取当前元素的上一个兄弟元素

- css选择器

```javascript
$('.wrapper')
    .prev()
    .css({ color: 'red' })
```

## .prevAll()

获取当前元素的上面所有兄弟元素

- css选择器

```javascript
$('.wrapper')
    .prevAll()
    .css({ color: 'red' })
```

## .prevUntil(selector)

获取当前元素的的所有上面兄弟元素，直到某个selector为止

- css选择器

```javascript
$('.wrapper')
    .prevUntil('h1')
    .css({ color: 'red' })
```