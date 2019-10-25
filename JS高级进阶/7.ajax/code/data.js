/*
 * @Author: zhangl
 * @Date: 2019-10-25 23:27:01
 * @LastEditors: zhangl
 * @LastEditTime: 2019-10-26 00:54:19
 * @Description: 介绍
 */
const http = require('http');

const server = http.createServer((req, res) => {
    // 允许任何域名访问
    res.setHeader('Access-Control-Allow-Headers', 'content-type,x-requested-with');
    res.setHeader('Access-Control-Allow-Origin', '*');

    if (req.method === 'OPTION') {
        res.statusCode = 200;
    }
    console.log(req.url)
    const data = {
        status: 0,
        msg: 'success',
        result: {
            name: 'zhangl',
            age: 18,
        },
    };

    res.end(JSON.stringify(data));
});

server.listen(3000, '127.0.0.1', () => {
    console.log('server is running');
})