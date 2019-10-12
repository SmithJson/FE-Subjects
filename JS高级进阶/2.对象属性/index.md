

[toc]

## 对象属性

### JS内置对象

- Array
- Object
- Date
- Math
- Number
- String
- RegExp
- Error
- EvalError
- TypeError

### 浏览器对象

- window
- Screen
- History
- Location
- Navigator

### 文档对象

- document

### formData对象

### 函数对象

function 其实也是一个对象

除arrow function外，所有函数都有`prototype`属性

所有对象都有`__proto__`属性

## 属性访问

- `.`运算符

- `[变量名]`

## 属性设置

1. 与属性访问一样
2. Object.definedProperty

## 删除属性

- `delete`关键字

## 判断是否对象包含某个属性

- in：判断对象是否存在某个属性（包括原型的属性）
- hasOwnProperty：判断属性是否是对象的自有属性

## 对象遍历

遍历可枚举属性

- `for ... in ..`：遍历可枚举的属性
- `Object.keys`：获得可枚举的实例属性

## 序列化对象

- JSON.stringify：序列化对象
- JSON.parse：还原对象