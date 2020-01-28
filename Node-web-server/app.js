/*
 * @Author: zhangl
 * @Date: 2020-01-21 19:08:02
 * @GitHub: https://github.com/SmithJson
 * @LastEditors  : zhangl
 * @LastEditTime : 2020-01-29 03:47:41
 * @Description: Do not edit
 * @FilePath: /FE-Subjects/Node-web-server/app.js
 */
const querystring = require('querystring');
const handleBlogRouter = require('./src/router/blog');
const handleUserRouter = require('./src/router/user');

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
    const {
        url,
        method,
        headers
    } = req;

    res.setHeader('Access-Control-Allow-Origin', ALLOW_ORIGINS.join(','));
    res.setHeader('Access-Control-Allow-Methods', ALLOW_METHODS.join(','));
    res.setHeader('Access-Control-Allow-Headers', ALLOW_HEADERS.join(','));
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Content-Type', ALLOW_CONTENT_TYPE.join(','));

    req.path = decodeURIComponent(url).split('?')[0];
    req.query = querystring.parse(decodeURIComponent(url).split('?')[1]);
    req.cookie = {};

    if (headers.cookie) {
        headers.cookie.split(/;\s/).forEach(item => {
            const [key, value] = item.split(/\=/);

            req.cookie[key] = value;
        });
    }

    if (method === 'OPTIONS') {
        res.end();
    } else {
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
    }
};

module.exports = serverHandle;

// process.env.NODE_ENV

