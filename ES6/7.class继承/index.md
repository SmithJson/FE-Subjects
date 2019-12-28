<!--
 * @Author: zhangl
 * @Date: 2019-12-21 23:40:09
 * @GitHub: https://github.com/SmithJson
 * @LastEditors  : zhangl
 * @LastEditTime : 2019-12-22 23:18:22
 * @Description: Do not edit
 * @FilePath: /FE-Subjects/ES6/7.class继承/index.md
 -->
## 闭包的底层原理

闭包是在当前作用域访问了其他作用域的变量，此时就行成了闭包

在 js 中大部分的属性都能直接访问，但对于`[[attribute]]` 这类的属性，是提供给 JS 引擎访问的，[[scope]]指向执行期上下文的集合，该集合以链表的形式呈现，这个就是作用域链

```javascript
function a() {
    function b() {
        console.log(name);
    }

    var num = 12;

    b();
}

var name = '全局';

a();
```

## class 继承

通过 `extends` 关键字进行继承

继承必须在构造函数中调用`super()`，这是因为子类的 this 是由父的构造构造函数生成的，不调用父类的构造函数，无法获得 this 对象，`super()`只能在构造函数中使用

```javascript
class Father {
    constructor() {
        this.name = '父亲';
        this.age = 33;
    }
    work() {
        console.log('我是父亲');
    }
}

class Children extends Father {
    constructor(name, job) {
        super();
        this.name = name;
        this.job = job;
    }
}

let c1 = new Children('zhangl', 'programmer');
```

## super 的用法

1. 在构造函数中
 - super()作为父类的构造函数
 - super.属性 为赋值操作时作为 this 对象
2. 在普通函数中，作为父类的原型对象，其中原型对象方法中的 this 指向子类实例
3. 在静态方法中，作为父类，其中父类中的静态方法中的 this 指向子类

```javascript
class Father {
    static num  =1;

    static get() {
        console.log(`static-${this.num}`);
    }

    get() {
        console.log(`普通-${this.num}`);
    }
}

class Children extends Father {
    constructor() {
        super();

        this.num = 2;
        super.num = 3;

        console.log(super.num); // undefined
        console.log(this.num); // 3
    }

    static get() {
        super.get();
    }

    get() {
        super.get();
    }
}

Children.get(); // static-1
let c1 = new Children();
c1.get(); // 普通-3
```