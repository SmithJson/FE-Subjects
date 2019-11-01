# 正则对象 {ignore=true}

[toc]

## \$n

获取第 n 个`()`里正则匹配的内容

```javascript
var re = /(\w+)\s(\w)/;
var str = "Smith John";

console.log(str.replace(re, '$2 $1')); // 'John Smith'
console.log(
    RegExp.$1, // Smith
    RegExp.$2 // John
);
```

## \$_

获取含有正则匹配内容的字符串

```javascript
var re = /hi/g;
re.test('hi there');
console.log(RegExp.input); // 匹配成功 'hi there'

re.test('foo');
console.log(RegExp.$_); // 匹配失败(使用上次的) 'hi there'

re.test('hi world');
console.log(RegExp.$_); // 匹配成功 'hi world'
```

## \$\&

获取最后匹配的内容

```javascript
var re = /hi/g;

re.test('hi there hi');
console.log(
    RegExp.lastMatch, // 'hi'
    RegExp['$&'], // 'hi'
);
```

## \$\+

获取最后一个 `()` 匹配到的`子串`

```javascript
var re = /(hi)/g;
re.test('hi there!');

console.log(
    RegExp.lastParen, // 'hi'
    RegExp['$+'], // 'hi'
)
```

## \$\`

获取匹配的内容之前的字符串

```javascript
var re = /world/g;
re.test('hello world');
console.log(
    RegExp.leftContext, // hello
    RegExp['$`'], // hello
);
```

## flags

获取正则的标签符号字符串，标志从左到右，即`gimuy`

```javascript
/foo/ig.flags; // 'gi'
/foo/.flags; // ' '
/foo/muy.flags; // 'muy'
```

## global

判断正则是使用了 `global` 标志

```javascript
/foo/g.global
```