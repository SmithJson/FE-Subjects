/*
 * @Author: zhangl
 * @Date: 2020-01-21 19:08:02
 * @GitHub: https://github.com/SmithJson
 * @LastEditors  : zhangl
 * @LastEditTime : 2020-01-25 02:15:10
 * @Description: Do not edit
 * @FilePath: /FE-Subjects/Node-web-server/app.js
 */
const querystring = require('querystring');
const handleBlogRouter = require('./src/router/blog');
const handleUserRouter = require('./src/router/user');

const serverHandle = (req, res) => {
    const { url } = req;

    res.setHeader('Content-type', 'application/json;charset=utf-8');
    req.path = decodeURIComponent(url).split('?')[0];
    req.query = querystring.parse(decodeURIComponent(url).split('?')[1]);

    const blogData = handleBlogRouter(req, res);

    if (blogData) {
        res.end(JSON.stringify(blogData));

        return;
    }

    const userData = handleUserRouter(req, res);

    if (userData) {
        res.end(JSON.stringify(userData));

        return;
    }

    res.writeHead(404, {
        'Content-Type': 'text/plain',
    });
    res.write('404 Not Found');
    res.end();
};

module.exports = serverHandle;

// process.env.NODE_ENV

