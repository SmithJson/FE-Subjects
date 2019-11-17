// 联合类型
let name: string | undefined;

if (typeof name === 'string') {
    name.toString(); // name type is string
}

// void类型
function printMenu(): void {
    console.log('没有返回值');
}

// never类型
function throwError(msg: string): never {
    throw new Error(msg);
}

function whileNever(): never {
    while (true) {
    }
}

// 字面量类型, 只能用字面量类型作为该变量的值
let gender: '男' | '女';
gender = '男';
gender = '女';

let arr: [];
arr = [];

let user: {
    name: string,
    age: number,
};
user = {
    name: 'zhangl',
    age: 18,
};

// 元祖类型
let tu: [string, number];
tu = ['字符串', 1];