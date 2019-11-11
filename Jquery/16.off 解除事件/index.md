# off 解除事件 {ignore=true}

[toc]

## .off()

解除 jQ 元素上绑定的事件

- eventType
- selector
- handle

```javascript
 function clickOne() {
    console.log('click one');
 }

function clickTwo() {
    console.log('click two');
}

function mouseoverOne() {
    console.log('mouseover one');
}

function mouseoverTwo () {
    console.log('mouseover two');
}

$('ul').on('click', 'li', clickOne);
$('ul').on('click', 'li', clickTwo)
$('ul').on('mouseover', 'li', mouseoverOne);
$('ul').on('mouseover', 'li', mouseoverTwo)
// 删除所有事件
$('ul').off();

// 删除某一类型事件
$('ul').off('click', 'li');

// 删除指定事件
$('ul').off('click', 'li', clickTwo);
```