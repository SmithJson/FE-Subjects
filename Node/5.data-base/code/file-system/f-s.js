/*
 * @Author: zhangl
 * @Date: 2020-01-13 15:59:55
 * @GitHub: https://github.com/SmithJson
 * @LastEditors  : zhangl
 * @LastEditTime : 2020-01-13 17:06:46
 * @Description: 文件存储
 * @FilePath: /FE-Subjects/Node/5.data-base/code/index.js
 */
const fs = require('fs');
const readline = require('readline');
const path = require('path');

const filePath = path.join(__dirname, './db.json');

// 读取文件内容
function get(name) {
    fs.readFile(filePath, {
        encoding: 'utf-8',
    }, (err, data) => {
        const res = JSON.parse(data);

        console.log(`${name} 的值为 ${res[name]}`);
    });
}

// 向文件写内容
function set(name, value) {
    fs.readFile(filePath, {
        encoding: 'utf-8',
    }, (err, data) => {
        const res = JSON.parse(data);

        res[name] = value;
        fs.writeFile(filePath, JSON.stringify(res), {
            encoding: 'utf-8',
        }, () => console.log('writed was success'));
    });
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'input >',
});

function handler(command) {
    const [operate, key, value] = command.split(/\s+/);

    switch(operate) {
        case 'get':
            get(key);
            break;
        case 'set':
            set(key, value);
            break
        default:
            console.log(`${operate} is not illegal`);
    }
}

rl.prompt();
rl.on('line', handler);

