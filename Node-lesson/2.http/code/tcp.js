/*
 * @Author: zhangl
 * @Date: 2020-01-07 23:20:30
 * @GitHub: https://github.com/SmithJson
 * @LastEditors  : zhangl
 * @LastEditTime : 2020-01-07 23:33:45
 * @Description: tcp服务
 * @FilePath: /FE-Subjects/Node/2.http/code/tcp.js
 */
const net = require('net');

const app = net.createServer((client) => {
    client.write('hello world!');
});

app.listen(3000, (res) => {
    console.log('server is running');
});