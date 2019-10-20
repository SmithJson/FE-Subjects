# css与prop的区别 {ignore=true}

[toc]

## .addClass()

遍历添加jQ元素类名

- string
- function

```javascript
$('.wrapper p').click(function () {
    $(this).addClass('active');
});
```

## .hasClass()

判断jQ元素是否存在指定类名

- string

```javascript
$('.wrapper p').click(function () {
    console.log($(this).hasClass('active'));
});
```

## .removeClass()

- 遍历移除jQ元素类名

- string
- function

```javascript
 $('.wrapper p').click(function () {
    if ($(this).hasClass('active')) {
        $(this).removeClass('active');
    } else {
        $(this).addClass('active');
    }
});
```

