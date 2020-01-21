/*
 * @Author: zhangl
 * @Date: 2020-01-21 19:08:02
 * @GitHub: https://github.com/SmithJson
 * @LastEditors  : zhangl
 * @LastEditTime : 2020-01-21 20:59:48
 * @Description: Do not edit
 * @FilePath: /FE-Subjects/Node-web-server/app.js
 */
const http = require('http');
const querystring = require('querystring');

const server = http.createServer((req, res) => {
    const {
        method,
        url,
    } = req;
    const newUrl = decodeURIComponent(url);
    const path = newUrl.split('?')[0];
    const query = querystring.parse(newUrl.split('?')[1]);
    const data = {
        method,
        path,
        query,
        url: newUrl,
    };

    res.setHeader('Content-Type', 'application/json;charset=utf-8');

    if (method === 'GET') {
        res.end(JSON.stringify(data));

        return;
    };

    if (method === 'POST') {
        let postData = '';

        req.on('data', chunk => postData += chunk.toString());
        req.on('end', () => {
            data.postData = postData;
            res.end(JSON.stringify(data));
        });

        return;
    }
});

server.listen(3000, () => console.log('OK'));

