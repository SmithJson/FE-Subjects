/*
 * @Author: zhangl
 * @Date: 2019-10-22 23:28:43
 * @LastEditors: zhangl
 * @LastEditTime: 2019-10-23 00:52:36
 * @Description: 介绍
 */
const http = require('http');

// const server = http.createServer((req, res) => {
//     // 发送给客户端
//     res.end('<h1>Hello World</h1>');
// });

const server = http.createServer();

// 绑定事件
// request：接收到请求触发
server.on('request', (req, res) => {
    // console.log(req.headers);
    // console.log(req.url);
    // console.log(req.method);
    // console.log(req.httpVersion);

    // 获取body
    // let body = '';

    // req.on('data', data => {
    //     body += data;
    // });
    // req.on('end', () => {
    //     console.log(body);
    // });

    // res.statusCode = 404;
    // res.statusMessage = 'zhangl';
    // res.setHeader('Content-Type', 'text/html');
    res.writeHead(200, 'ok', {
        'Content-Type': 'text/html',
    });
    res.end('<h1>Hello World</h1>');
});

// close：服务关闭触发
server.on('close', () => {
    console.log('发生未知错误');
});

server.listen(12306);
console.log('Server is running');