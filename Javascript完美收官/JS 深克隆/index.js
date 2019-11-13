(function (global) {
    function Obj() {
        // complex data type
        this.func = function () {
            console.log('function inherit');
        };
        this.obj = {value: 'object inherit'};
        this.arr = [
            'array inherit',
            1,
            2,
            {name: 'test'},
        ];
        this.reg = /regexp inherit/;
        this.date = new Date();

        // primitive data
        this.und = undefined;
        this.str = 'string inherit';
        this.NaN = NaN;
        this.infinity = Infinity;
        this.num = 1234;
        this.null = null;
        this.bigInt = BigInt(1);

        this.set = new Set(['set inherit', 1, 2, 3]);
        this.map = new Map([
            ['value', 'map inherit'],
            ['a', 2],
            ['b', 3],
        ]);
        // 符号属性
        this[Symbol('1')] = 1;
    }

    Obj.prototype.gender = 'male';
    Obj.prototype.hobbies = ['basketball', 'running', 'swimming'];

    let obj1 = new Obj();

    Object.defineProperty(obj1, 'innumerable', {
        enumerable: false,
        value: 'innumerable',
    });
    obj1['loop'] = obj1;

    /**
     * 1. JSON.parse(JSON.stringify(obj))
     * 缺点：
     *  1. 不能复制Regexp，Function，Set，Map, 符号，不可枚举属性
     *  2. Date 属性的复制显示错误
     *  3. 复制循环引用属性的值为自身时，会报错
     */

    // let obj2 = JSON.parse(JSON.stringify(obj1));

    /**
     * 2. 递归实现深克隆
     *  缺点：
     *   1. 不能复制Date，Regexp，Set，Map, 符号，不可枚举属性
     *   2. 复制循环引用属性的值为自身时，会出现栈溢出情况
     *   3. 没有实现原型属性赋值
     */

    function deepClone(obj) {
        let templateObj;

        if (obj && typeof obj === 'object') {
            let isArray = Array.isArray(obj);

            templateObj = isArray ? [] : {};

            for (let key in obj) {
                templateObj[key] = deepClone(obj[key]);
            }

            return templateObj;
        } else {
            return obj;
        }
    }

    // let obj3 = deepClone(obj1);

    /**
     * 3. 终结版
     * 优点：
     *  1. 实现了对所有属性的复制（包括Regexp，Date，Set，Map，符号，不可枚举，Function 属性）
     *  2. 解决了循环引用属性值为自身时，栈溢出问题
     *  3. 实现了对原型属性的复制
     */
    const deepClone2 = (obj, hash = new Map()) => {
        // 存放一些不能
        const type = [
            Date,
            Set,
            Map,
            WeakMap,
            WeakSet,
            RegExp,
        ];

        if (hash.has(obj)) return hash.get(obj);
        if (type.includes(obj.constructor)) return new obj.constructor(obj);

        // 获取对象所有的属性描述符
        const allDescription = Object.getOwnPropertyDescriptors(obj);
        // 原型继承
        const cloneObj = Object.create(Object.getPrototypeOf(obj), allDescription);

        hash.set(obj, cloneObj);

        // Reflect.ownKeys：以数组形式返回对象属性名（包括不可枚举属性， 属性）
        for (let key of Reflect.ownKeys(obj)) {
            const value = obj[key];

            cloneObj[key] = (deepClone2.isComplexDataType(value) && typeof (value) !== 'function') ?
                deepClone2(value, hash) : value;
        }

        return cloneObj;
    };

    // 判断是数据否是引用类型
    deepClone2.isComplexDataType = obj => obj != null &&
        (typeof (obj) === 'object' || typeof (obj) === 'function');

    const obj4 = deepClone2(obj1);
    // debugger

})(window);