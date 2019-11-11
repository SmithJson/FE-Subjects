# 类名相关操作及深意 {ignore=true}

[toc]

## html

获取或设置jQ元素的html内容

- string
- function

```javascript
 // 只获取第一个jQ元素的值
$('ul li').html();

var data = ['张三', '李四', '王五', '路人甲', '路人乙'];
// 设置则是对选中jQ元素进行遍历操作
$('ul li').html(function (index, ele) {
    if (ele !== '3') {
        return data[index];
    }
})
$('ul li').html(9);
```

## text

获取或设置jQ元素的文本内容

与html功能非常相似，但html在获取值时，只能获取选中的第一个jQ元素的html值，但text获取的则是所有选中的jQ元素的文本值

- string
- function

```javascript
// 遍历获取所有li的文本
$('ul li').text();

$('ul li').text(function (index, ele) {
    return ele * 2
});

$('ul li').text(2);
```