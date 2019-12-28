# 正则对象 {ignore=true}

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

判断正则是否使用了 `g` 标志

```javascript
/foo/g.global
```

## ignoreCase

判断正则是否使用了 `i` 标志

```javascript
/foo/i.ignoreCase
```

## multiline

判断正则是否使用了 `m` 标志

```javascript
/foo/m.multiline
```

## source

获取正则文本，忽略标识符和大小写

```javascript
var regexp = /fooBar/.ig;

regexp.source; // fooBar
```

## sticky

从指定索引位置开始，从左至右的匹配查找

^的优先级大于 lastIndex 的优先级

```javascript
var str = '#foo#';
var regexp = /foo/y; // y：sticky

regexp.lastIndex = 0;
regexp.test(str);
```

## unicode

判断正则是否使用了 `u` 标识符

```javascript
var regex = new RegExp('\u{61}', 'u');

console.log(regex.unicode); // true
```

## \$'

获取匹配的内容之后的字符串

```javascript
var re = /hello/g;

re.test('hello world');
re.rightContext; // " world"
re["$'"]; // " world"
```

## species

获取正则对象的构造器

```javascript
RegExp[Symbol.species]; // 函数 RegExp()
```

## lastIndex

下次匹配的开始位置

只有正则含有 `g` 标识符才会有效

1. lastIndex > str.length
    匹配失败，lastIndex = 0
2. lastIndex === str.length，且匹配到空字符串
    正则从 lastIndex 开始匹配
3. lastIndex === str.length，且没有匹配到字符串
    lastIndex = 0
4. lastIndex = 最近匹配成功的下一个位置

```javascript
var re = /(hi)+/g;

console.log(re.exec('hi123'));// ['hi', 'hi', ...]
console.log(re.lastIndex); // 2

console.log(re.exec('hi123')); // null
console.log(re.lastIndex); // 0
```