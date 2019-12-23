/*
 * @Author: zhangl
 * @Date: 2019-12-23 19:07:48
 * @GitHub: https://github.com/SmithJson
 * @LastEditors  : zhangl
 * @LastEditTime : 2019-12-23 19:12:54
 * @Description: Do not edit
 * @FilePath: /FE-Subjects/ES6/8.promise/code/server/route.js
 */
const http = require('http');
const url = require('url');
const data = require('./data');

const app = http.createServer((res, req) => {
    req.setHeader('Access-Control-Allow-Origin', '*');

    // const { method } = res;
    const params = url.parse(res.url, true);
    const { pathname } = params;
    const { role, weapon } = data;

    // fetch role API
    if (pathname === '/name') {
        const result = role.filter(item => item.id == params.query.id - 0);

        req.writeHead(200, {
            'Content-Type': 'Application/json;charset=utf-8',
        });
        req.write(JSON.stringify({
            status: 0,
            msg: 'OK',
            data: result,
        }));
    }

    // fetch weapon API
    if (pathname === '/weapon') {
        const result = weapon.filter(item => item.id == params.query.id - 0);

        req.writeHead(200, {
            'Content-Type': 'Application/json;charset=utf-8',
        });
        req.write(JSON.stringify({
            status: 0,
            msg: 'OK',
            data: result,
        }));
    }

    req.end();
});

app.listen(3000, () => console.log('server is running'));