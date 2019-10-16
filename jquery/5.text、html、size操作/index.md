# text、html、size操作 {ignore=true}

[toc]

## .css()

获取或设置样式属性值

- 字符串
- 对象

```javascript
// 设置属性值
$('.demo')
    .css('width', '100px')

$('.demo')
    .css({ width: '100px', height: '100px', backgroundColor: 'red' })
    .css({ width: '+=100px' })

// 获取属性值
$('.demo')
    .css('width')
```

## attr

特性：HTML元素拥有的属性
属性：DOM节点对象的属性（特性是属性的子集）
特性有映射关系，非特性没有映射关系

获取或设置HTML元素的属性值，基于setAttribute、getAttribute

```javascript
// 获取
$('.demo').attr('cst')
// 设置
$('.demo').attr('id', 'test1')
```

## prop

获取或设置DOM节点对象的属性值

```javascript
// 获取
$('.demo').prop('cst')
$('input').prop('checked')
// 设置
$('input').prop('log', 'log') // 属性
$('input').prop('checked', true) // 属性
$('input').prop('id', 'p1') // 因为id为特性，所以当给id赋值时，input元素的id值也会修改
```

