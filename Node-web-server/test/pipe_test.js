/*
 * @Author: zhangl
 * @Date: 2020-02-04 14:40:08
 * @GitHub: https://github.com/SmithJson
 * @LastEditors  : zhangl
 * @LastEditTime : 2020-02-04 15:00:40
 * @Description: Do not edit
 * @FilePath: /FE-Subjects/Node-web-server/test/pipe_test.js
 */
// 标准输入输出
// process.stdin.pipe(process.stdout);

// 文件复制
// const fs = require('fs');
// const path = require('path');

// const fileName1 = path.join(__dirname, './data.txt');
// const fileName2 = path.join(__dirname, './data_back.txt');
// const readStream = fs.createReadStream(fileName1, {
//     highWaterMark: 1 * 1024,
// });
// const writeStream = fs.createWriteStream(fileName2);

// let count = 0;

// readStream.pipe(writeStream);
// readStream.on('data', chunk => {
//     count++;
//     console.log(`第${count}次读取：${chunk.toString()}\n`);
// });
// readStream.on('end', () => {
//     console.log('copy done');
// });

// 文件读取
const fs = require('fs');
const http = require('http');
const path = require('path');

const fileName1 = path.join(__dirname, './data.txt');

http.createServer((req, res) => {
    const { method } = req;
    const readStream = fs.createReadStream(fileName1);

    if (method === 'GET') {
        readStream.pipe(res);
    }
})
    .listen(3000, () => {
        console.log('server is running');
    });

