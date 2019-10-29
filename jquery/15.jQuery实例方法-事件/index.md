# jQuery实例方法-事件

[toc]

## .on()

jQ 元素绑定事假

1. eventType
2. selector
3. data
4. handle

```javascript
$('li').on('click', function () {
    alert($(this).text());
});

$('ul').on('click', { name: 'zhang', age: 12 }, function (e{
    // 通过 e.data 获取绑定在 on 方法上的数据
    console.log(e.data);
    alert($(this).text());
});

// 不要出现 data 为字符串，但第二个参数 selector 不写的情况
$('ul').on('click', 'li', { name: 'zhang', age: 12 }, functio(e) {
    // 通过 e.data 获取绑定在 on 方法上的数据
    console.log(e.data);
    alert($(this).text());
});

// 通过 on 绑定多个事件
$('ul').on({
    'click': function (e) {
        console.log('click', $(this).text(), e.data);
    },
    'mouseover': function (e) {
        console.log('mouseover', $(this).text(), e.data);
    },
}, 'li', {name: 'zhangl'});
```

## .one()

jQ 元素绑定事件，且绑定的事件只能执行一次

1. eventType
2. selector
3. data
4. handle

```javascript
$('a').one('click', { name: 'zhangl' }, function (e) {
    console.log('one', e.data);

    // jQ 中阻止事件冒泡和阻止默认事件的通用法法
    return false;
});
```