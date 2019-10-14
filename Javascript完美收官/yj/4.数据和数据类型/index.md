# 数据和数据类型 {ignore=true}

[toc]

数据：有用的信息

数据类型：数据的分类

## JS中的数据类型

### 原始类型

原始类型是指不可在细分的类型

1）数字类型：Number

直接书写

> 了解：
> 数字类型可以加前缀，来表示不同的进制
> 0：表示8进制
> 0x：表示16进制
> 0b：表示二进制

```javascript
var num = 12345;
```

2）字符串类型：String

- 单引号 \'
- 双引号 \"
- 反引号 \`（模板字符串）

在字符串通过转义符（`\`）来对特殊字符进行转义

```javascript
var str1 = 'hello world';
var str2 = "hello world";
var str3 = `hello world`;
console.log('\\', '\'', "\""); // 换行
```


3）布尔类型：Boolean

布尔类型用于表示真或假两种状态

- true：真
- false：假

```javascript
var flag1 = true;
var flag2 = false;
```

4）undefined类型

表示未定义，不存在

只有一种数据书写方式：undefined

```javascript
var un = undefined;
```

5）null类型

表示空，不存在

> 区分某些长数字和字符串：如果按照数字的读法，则使用数字类型；如果按照字符串的读法，则使用字符类型

### 引用类型

1）对象：Object（事物、东西）

可以认为，对象是由多个原始数据类型组合而成

```javascript
var person = {
    name: 'zhangl',
    age: 18,
    gender: 'male',
};
```

2）函数

## 获取数据类型

在数据前加上`typeof`

```javascript
console.log(typeof 12312);
```

## 字面量

直接书写的具体的数据，叫做**字面量**