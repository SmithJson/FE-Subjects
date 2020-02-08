/*
 * @Author: zhangl
 * @Date: 2020-01-12 21:24:45
 * @GitHub: https://github.com/SmithJson
 * @LastEditors  : zhangl
 * @LastEditTime : 2020-01-12 23:07:03
 * @Description: Do not edit
 * @FilePath: /FE-Subjects/Node/4.express/code/index.js
 */
const express = require('express');
const birds = require('./birds');

const app = express();

// 将 public 作为静态资源根目录
app.use(express.static('./public'));
// 使用 router 中间件
app.use('/birds', birds);
app
    .route('/info')
    .put((req, res) => {
        res.end('<h1>Put Request</h1>');
    })
    .get((req, res) => {
        res.end('<h1>Get Request</h1>');
    })
    .post((req, res) => {
        res.end('<h1>Post Request</h1>');
    });

app.listen(3000, () => console.log('server is running'));