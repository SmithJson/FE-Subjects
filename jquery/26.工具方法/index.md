# 工具方法 {ignore=true}

[toc]

## .type()

判断数据类型

```javascript
// .type
console.log($.type('zhangl'));
console.log($.type(123));
console.log($.type(true));
console.log($.type(null));
console.log($.type(undefined));
console.log($.type(function () {}));
console.log($.type(Symbol('zhangl')));
console.log($.type(BigInt(1)));
console.log($.type({}));
console.log($.type([]));
console.log($.type(new Date()));
console.log($.type(/1/));

// .isArray || .isFunction || .isWindow
console.log($.isArray([]));
console.log($.isFunction(() => {}));
```

## .trim()

消除两端空格

```javascript
console.log($.trim('      1  2     3    '));
```