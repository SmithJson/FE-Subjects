## proxy是什么

代理的含义

## get 拦截对象获取属性操作

```javascript
let obj = {
    name: 'zhangl',
};

// target：用 Proxy 包装的目标对象
// handle：Proxy 代理的操作对象
let handle = {
    // 目标对象
    // 访问的属性名
    // proxy 实例对象
    get(target, key, proxy) {
        return target[key];
    },
};
let proxy = new Proxy(obj, handle);

console.log(proxy.name); // 'zhangl'
```

## set 拦截对象赋值操作

```javascript
let obj = {};

let handle = {
    // 目标对象
    // 属性名
    // 属性值
    // proxy 对象
    set(target, key, value, proxy) {
        // console.log(target, key, value, proxy);
        if (key === 'age') {
            if (!Number.isInteger(value)) {
                throw new Error(`${key} type is not number`);
            }
        }

        target[key] = value;
    },
};
let proxy = new Proxy(obj, handle);

proxy.age = 100;
console.log(proxy.age);
```

## get 与 set 案例

```javascript
// 需求：禁止外部访问内部属性，默认带 _name 的是内部属性
let obj = {
    _proto: '内部属性',
};

let handle = {
    set(target, key, value, proxy) {
        target[key] = value;
    },
    get(target, key, proxy) {
        if (!/^_/.test(key)) {
            return target[key];
        }
    },
};
let proxy = new Proxy(obj, handle);

proxy._proto = 123;
console.log(proxy._proto);
```

## deleteProperty 拦截对象属性删除操作

```javascript
let obj = {
    name: 'zhangl',
};
let handle = {
    deleteProperty(target, key) {
        delete target[key];
    }
};
let proxy = new Proxy(obj, handle);

delete proxy.name;
console.log(proxy);
```

## apply 拦截函数的调用

```javascript
let target = function () {
    return '函数调用';
}
let handle = {
    apply(target, thisArgs, args) {
        console.log(target, thisArgs, args);

        return 456;
    }
};

let proxy = new Proxy(target, handle);

console.log(proxy(123));
```

## has 拦截是否有某个属性

in、hasOwnProperty 都能检测到

```javascript
let father = {
    name: 'father',
};
let son = {
    _prop: '私有',
    prop: 'b',
};
son.__proto__ = father;
let handle = {
    has(target, key) {
        if (/^_/.test(key)) {
            return false;
        }
        return key in target;
    }
};
let proxy = new Proxy(son, handle);

console.log('_prop' in proxy); // false
console.log('prop' in proxy); // true
console.log('name' in proxy); // true
```

## constructor 拦截构造函数

```javascript
function Person(name) {
    this.name = name;
}
let person = new Person('tony');
let proxy = new Proxy(Person, {
    construct(target, key) {
        return {
            name: 'zhangl',
            age: 18,
        };
    }
});

console.log(new proxy('张三') instanceof proxy
```

## Reflect 与 Proxy的 Api 一样

```javascript
let obj = {
    get do() {
        return `${this.name} is ${this.identify}`;
    }
};
let person = {
    name: 'zhangl',
    identify: 'student',
};

let res = Reflect.get(obj, 'do', person);

console.log(res);
```