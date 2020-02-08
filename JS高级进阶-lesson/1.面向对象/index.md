# 面向对象 {ignore=true}

[toc]

## 数据类型

### 基础类型

具体值存放在栈区的数据（大小固定）

- String（字符串）
- Number（数字）
- Boolean（布尔值）
- Undefined
- Null
- Symbol

### 引用类型

指针（引用）存放在栈区，具体值存放在堆区的数据（动态分配，大小可变）

- Array（数组）
- Object（对象）
- function（函数）

### 区别：

1. 基本类型进行值传递；引用类型进行引用地址传递
2. 基本类型的值不可变；引用类型的值可变
3. 基本类型值存放在栈区；引用类型引用存放在栈区，值存放在堆区

### 数据类型检测

1. typeof：适用于基本数据类型
2. toString：适用于所有数据
3. instanceof：适用于所有数据
4. constructor：适用于所有数据

## 创建对象

1. 内置构造函数

```javascript
var obj1 = new Object();
```

2. 字面量定义

```javascript
var obj1 = {};
```

3. 使用Object.create方法

```javascript
var obj1 = Object.create(null);
```

4. 工厂模式

```javascript
function createObj(name, age) {
    var obj = new Object();

    obj.name = name;
    obj.age = age;

    return obj;
}

var obj3 = new createObj('zhangl', 18);
```

5. 自定义构造函数

```javascript
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Var p1 = new Person('zhangl', 30);
```

## 过程式与面向对象

- 过程式开发 --> 站在一个执行者的角度，任何事都亲力亲为
- 面向对象开发的模式 -> 站在指挥者角度，将事情交给对应的类处理，我们检查最后的结果即可
- 面向对象的特点
    + 封装
    + 继承：提高代码复用性
    + 多态