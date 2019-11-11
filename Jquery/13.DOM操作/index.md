# DOM 操作 {ignore=true}

[toc]

## .clone()

复制一个新的 jQ 元素，无法复制原 jQ 元素通过 prop 添加的值

- boolean：是否复制方法

```javascript
$('.wrapper').click(function () {
    alert(1);
});

$('.wrapper').clone(); // 没有复制方法
$('.wrapper').clone(true); // 复制了方法
```

## .data()

设置或读取存储数据

会试图尝试读取 attribute 里的 data-的值，但不能在 attribute 里设置 data-的属性

存储的原数据是什么类型，返回依旧是该类型

- object
- string

```javascript
 $('.wrapper').data({
    name: 'zhangl',
    age: 18,
})

console.log(
    $('.wrapper').data('name'), // 'zhangl'
    $('.wrapper').data('age'), // 18
    $('.wrapper').data('index'), // 1
)
```