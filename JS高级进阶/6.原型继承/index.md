# 原型继承 {ignore=true}

[toc]

## 多继承

使用 Object.create 方法实现

```javascript
// 父类 A
function parentA(gender) {
    this.gender = gender;
}

parentA.prototype.speakA = function () {
    console.log('A 原型的 speak');
};

// 父类 B
function parentB(name, age) {
    this.name = name;
    this.age = age;
}

parentB.prototype.speakB = function () {
    console.log('B 原型 speak');
};

// 子类
function Sub(name, age, gender) {
    // 借用构造函数
    parentA.call(this, gender);
    parentB.call(this, name, age);
}

// 将多个原型合并为一个,
var newPrototype = Object.assign({}, parentA.prototype, parentB.prototype);

Sub.prototype = Object.create(newPrototype, {
    // 修改新对象的 constructor 指向
    constructor: {
        value: Sub,
    }
});

var sub = new Sub('zhangl', 18, 'male');

console.log(sub, sub.constructor);
sub.speakA();
sub.speakB();
```