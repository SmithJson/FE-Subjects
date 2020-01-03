/*
 * @Author: zhangl
 * @Date: 2020-01-03 15:29:44
 * @GitHub: https://github.com/SmithJson
 * @LastEditors  : zhangl
 * @LastEditTime : 2020-01-03 16:35:32
 * @Description: 模拟p promise
 * @FilePath: /FE-Subjects/Node/1.node基础/code/express.js
 */
const http = require('http');
const url = require('url');

class Express {
    constructor() {
        this.route = [];
    }

    get(url, cb) {
        this.route.push({
            url,
            method: 'GET',
            handle: cb,
        });
    }

    listen() {
        const app = http.createServer((req, res) => {
            const {
                url: reqUrl,
                method,
            } = req;
            const urlObj = url.parse(reqUrl, true);
            const {
                query,
                pathname,
            } = urlObj;
            const router = this.route.find(item => (
                item.url === decodeURI(pathname) && method === item.method
            ));

            res.query = urlObj.query;
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json; charset=utf-8');
            router && router.handle && router.handle(req, res);
            res.end();
        });

        app.listen(...arguments);
    }
}

module.exports = Express;