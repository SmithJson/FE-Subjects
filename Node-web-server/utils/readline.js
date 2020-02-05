/*
 * @Author: zhangl
 * @Date: 2020-02-06 01:15:19
 * @GitHub: https://github.com/SmithJson
 * @LastEditors  : zhangl
 * @LastEditTime : 2020-02-06 01:26:44
 * @Description: readline 进行日志分析
 * @FilePath: /FE-Subjects/Node-web-server/utils/readline.js
 */
const fs = require('fs');
const path = require('path');
const readline = require('readline');

let sum = 0; // 浏览器数量
let count = 0; // chorem 浏览器书数量
const fileName = path.join(__dirname, '../', 'logs', 'access.log');

const readStream = fs.createReadStream(fileName);
const readLine = readline.createInterface({
    input: readStream,
});

readLine.on('line', input => {
    if (!input) {
        return;
    }
    sum++;
    const userAgent = input.split(' -- ')[2];

    if (userAgent.includes('Chrome')) {
        count++;
    }
});

readLine.on('close', () => {
    console.log(`Chrome percent：${(count / sum).toFixed(2)}`);
});

