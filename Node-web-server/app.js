/*
 * @Author: zhangl
 * @Date: 2020-01-21 19:08:02
 * @GitHub: https://github.com/SmithJson
 * @LastEditors  : zhangl
 * @LastEditTime : 2020-01-28 02:22:33
 * @Description: Do not edit
 * @FilePath: /FE-Subjects/Node-web-server/app.js
 */
const querystring = require('querystring');
const handleBlogRouter = require('./src/router/blog');
const handleUserRouter = require('./src/router/user');

const getPostData = req => {
    return new Promise((resolve, reject) => {
        const {
            method,
            headers,
        } = req;
        let postData = '';

        if (method !== 'POST') {
            resolve({});

            return;
        }

        if (headers['content-type'] !== 'application/json') {
            resolve({});
            console.log(headers['content-type'] !== 'application/json')

            return;
        }

        req.on('data', chunk => postData += chunk.toString());
        req.on('end', () => {
            if (!postData) {
                resolve({});

                return;
            }

            resolve(JSON.parse(postData));
        });
    });
};
const serverHandle = (req, res) => {
    const { url } = req;

    res.setHeader('Content-type', 'application/json;charset=utf-8');
    req.path = decodeURIComponent(url).split('?')[0];
    req.query = querystring.parse(decodeURIComponent(url).split('?')[1]);

    getPostData(req)
        .then(async postData => {
            req.body = postData;

            const blogData = await handleBlogRouter(req, res);

            if (blogData) {
                res.end(JSON.stringify(blogData));

                return;
            }

            const userData = await handleUserRouter(req, res);

            if (userData) {
                res.end(JSON.stringify(userData));

                return;
            }

            res.writeHead(404, {
                'Content-Type': 'text/plain',
            });
            res.write('404 Not Found');
            res.end();
        });
};

module.exports = serverHandle;

// process.env.NODE_ENV

