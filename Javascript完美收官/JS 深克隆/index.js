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
    // 判断是否是引用数据类型
    deepClone2.isComplexDataType = obj => obj !== null && (typeof obj === 'function' || typeof obj === 'object');

    function deepClone2(obj, hash = new WeakMap()) {
        // 提示：能递归进入该函数的都是引用类型数据
        // 存放 typeof === "object" 的的构造构造器，用于区别 obj 是否是普通对象
        const dataType = [Date, RegExp, WeakMap, WeakSet, Map, Set];

        // 判断是否有缓存，如果有则直接返回，解决了递归爆栈的情况
        // 例：obj.loop = obj：当这样形成环后，如果递归进入 deepClone，会返回第一次创建的 cloneObj 返回
        if (hash.has(obj)) return hash.get(obj);
        // 如果不是普通对象，则拷贝一个新 obj 返回
        if (dataType.includes(obj.constructor)) return new obj.constructor(obj);

        // 获取目标对象的所有属性描述对象
        const allDescriptions = Object.getOwnPropertyDescriptors(obj);
        // 原型拷贝
        const cloneObj = Object.create(Object.getPrototypeOf(obj), allDescriptions);

        // 缓存引用类型数据值
        hash.set(obj, cloneObj);

        // Reflect.ownKeys 以数组形式返回对象的属性名（包括符号属性和不可枚举属性）
        for (let key of Reflect.ownKeys(obj)) {
            const value = obj[key];

            // 原始类型属性直接返回
            // 引用类型属性继续递归deepClone
            cloneObj[key] = (deepClone2.isComplexDataType(value) && typeof value !== 'function') ?
                deepClone(value, hash) : value;
        }

        return cloneObj;
    }

    const cloneObj = deepClone2(obj);
    // debugger

})(window);