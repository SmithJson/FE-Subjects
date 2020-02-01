/*
 * @Author: zhangl
 * @Date: 2020-01-21 19:08:02
 * @GitHub: https://github.com/SmithJson
 * @LastEditors  : zhangl
 * @LastEditTime : 2020-02-02 01:14:18
 * @Description: Do not edit
 * @FilePath: /FE-Subjects/Node-web-server/app.js
 */
const querystring = require('querystring');
const handleBlogRouter = require('./src/router/blog');
const handleUserRouter = require('./src/router/user');
const {
    get,
    set,
} = require('./src/db/myredis');

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

const getCookieExpires = (distance = 0.5) => {
    const day = distance * 24 * 60 * 60 * 1000;
    const date = new Date();

    date.setTime(date.getTime() + day);

    return date.toGMTString();
};

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

const serverHandle = async (req, res) => {
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
    let = { userId } = req.cookie;
    let needSetSession = false;

    if (userId) {
        if (!await get(userId)) {
            set(userId, JSON.stringify({}));
        }
    } else {
        needSetSession = true;
        userId = `${Date.now()}_${Math.random()}`;
        set(userId, JSON.stringify({}));
    }
    req.sessionId = userId;
    req.session = await get(userId);
    if (method === 'OPTIONS') {
        res.end();
    } else {
        getPostData(req)
            .then(async postData => {
                req.body = postData;
                const blogData = await handleBlogRouter(req, res);

                if (blogData) {
                    if (needSetSession) {
                        res.setHeader(
                            'Set-Cookie',
                            `userId=${userId}; path=/; httpOnly; expires=${getCookieExpires()}`,
                        );
                    }
                    res.end(JSON.stringify(blogData));

                    return;
                }
                const userData = await handleUserRouter(req, res);

                if (userData) {
                    if (needSetSession) {
                        res.setHeader(
                            'Set-Cookie',
                            `userId=${userId}; path=/; httpOnly; expires=${getCookieExpires()}`,
                        );
                    }
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

