# 必会增删改查DOM操作一 {ignore=true}

[toc]

## val()

设置或获取表单Value值

- function

```javascript
// 获取
$('input[name="name"]').val();

// 设置
$('input[name="name"]').val(function (index, oldValue) {
    return oldValue + index;
});
```