/*
 * @Author: zhangl
 * @Date: 2020-01-03 23:34:25
 * @GitHub: https://github.com/SmithJson
 * @LastEditors  : zhangl
 * @LastEditTime : 2020-01-07 23:11:55
 * @Description: HTTP 服务器
 * @FilePath: /FE-Subjects/Node/2.http/code/index.js
 */
const http = require('http');

const ALLOW_METHODS = [
    'GET',
    'PATCH',
    'DELETE',
    'POST',
    'PUT',
    'OPTIONS',
],
ALLOW_ORIGINS = [
    'http://127.0.0.1:5500',
],
ALLOW_HEADERS = [
    'Authorization',
    'Content-Type',
    'X-Token',
],
ALLOW_CONTENT_TYPE = [
    'Application/json',
    'charset=uft-8',
];


const app = new http.createServer();

app.on('request', (request, response) => {
    const {
        method,
        headers
    } = request;
    const data = {
        name: '一叶小和尚-test数据',
        version: '1.0.0',
        headers,
        method,
    };

    // 允许访问的请求源
    response.setHeader('Access-Control-Allow-Origin', ALLOW_ORIGINS.join(','));
    // 允许请求的方式
    response.setHeader('Access-Control-Allow-Methods', ALLOW_METHODS.join(','));
    // 允许传递的请求头
    response.setHeader('Access-Control-Allow-Headers', ALLOW_HEADERS.join(','));
    // 允许传递 cookie
    response.setHeader('Access-Control-Allow-Credentials', true);
    // 允许请求的 MIME 类型
    response.setHeader('Content-Type', ALLOW_CONTENT_TYPE.join(','));

    if (method === 'OPTIONS') {
        response.statusCode = 200;
        response.end();
    } else {
        response.statusCode = 200;
        response.setHeader('Set-Cookie', 'foo=bar');
        response.end(JSON.stringify(data));
    }
});

app.listen(3000, () => {
    console.log('server is running');
});