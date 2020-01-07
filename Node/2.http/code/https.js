/*
 * @Author: zhangl
 * @Date: 2020-01-07 23:34:43
 * @GitHub: https://github.com/SmithJson
 * @LastEditors  : zhangl
 * @LastEditTime : 2020-01-07 23:46:40
 * @Description: https服务器
 * @FilePath: /FE-Subjects/Node/2.http/code/https.js
 */
const https = require('https');
const fs = require('fs');

const key = fs.readFileSync('./key.pem');
const cert = fs.readFileSync('./cert.pem');
const options = {
    key,
    cert,
};

const app = https.createServer(options, (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.writeHead(200);
    response.end('hello world!');
});

app.listen(3000, () => {
    console.log('server is running');
});