## class 类

* ES6提供的一种生成对象实例的写法，ES5构造函数的语法糖

## 作用

* 写法更清晰，更像面相对象的写法

## ES5生成实例方法

```javascript
Person.prototype.say = function () {
    console.log(`我是${this.name}`);
};
// 错误写法
// Person.prototype.say = () => {
//     console.log(`我是${this.name}`);
// };

function Person(name, age) {
    this.name = name;
    this.age = age;
}

let p1 = new Person('张三', 18);
p1.say();
```

## ES6生成实例

```javascript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    say() {
        console.log(`我是${this.name}`);
    }
}

let p1 = new Person('李四', 18);
p1.say();

let p2 = new Person();
console.log(typeof Person.constructor); // "function"
console.log(p2.constructor === Person); // true
```

**ES6类的方法都定义在类的 prototype 上**

其实调用 ES6实例的方法，就是调用原型上的方法

## constructor

类默认的方法，只要通过 new来生成，就会自动调用这个函数，如果不写也存在

```javascript
class Car {
    constructor() {
        console.log(this);

        return Object.create(null);
    }
}

// 类似于
// Car.prototype = {
//     constructor() {},
// };

let bmp = new Car();
console.log(bmp instanceof Car); // false
```

## 共享原型对象

```javascript
Person {
    constructor() {}
}
Person.prototype.get = function () {
    console.log('父类');
};

let p1 = new Person();
let p2 = new Person();

p1.get();
p2.get();
```

## 取值函数与存值函数

```javascript
// ES6
class MyClass {
    get prop() {
        return MyClass.prop;
    }
    set prop(value) {
        // 错误，会导致一直调用 set 操作
        // this.prop = value;
        MyClass.prop = value;
    }
}

let my = new MyClass();
my.prop = 'zhangl';
console.log(my.prop);

// ES5
const person = {
    get name() {
        console.log('调用 get');
        return name
    },
    set name(value) {
        console.log('调用 set');
        name = value;
    }
};

person.name = 'tony'; // 调用 set 操作
console.log(person.name); // tony // 调用 get 操作
```

## this 指向问题

```javascript
class Person {
    // 类内部的默认采用严格模式，所以当使用解构赋值调用 eat 函数
    // 里面的 this 为 undefined
    // 可以用箭头函数或 bind 解决
    // eat() {
    //     console.log(this);
    //     this.get();
    // }

    constructor() {
        // 方法二
        // this.eat = this.eat.bind(this);
    }

    // 方法一
    eat = () => this.get();

    get() {
        console.log('获得食物');
    }
}

let p1 = new Person();
let { eat } = p1;
eat();
```

## 实例属性的新写法

```javascript
class Person {
    // 实例属性新写法
    name = 'zhangl';
}

let p1 = new Person();
console.log(p1.name); // 'zhangl'
```

## 静态属性

class 类本身的属性

```javascript
class Person {
    // 静态属性
    static prop = '123';
}

console.log(Person.prop); // '123'
```

## 私有属性和私有方法

只能在类的内部使用，不能在类的外部使用

```javascript
class Person {
    #name = 1231;
    get() {
        return this.#name;
    }
}

let p1 = new Person();
console.log(p1.get()); // 1231
// console.log(p1.#name); // 会报错，私有属性，只能只能在类的内部使用
```