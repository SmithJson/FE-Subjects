/*
 * @Author: zhangl
 * @Date: 2020-04-15 16:34:06
 * @LastEditors: zhangl
 * @LastEditTime: 2020-04-15 16:38:17
 * @GitHub: https://github.com/SmithJson
 * @FilePath: /8.react-ssr服务队渲染/mock/index.js
 * @Description: Do not edit
 */
const express = require('express');

const app = express();

app.get('/course/list', (req, res) => {
    // 允许跨域
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Content-Type', 'application/json;charset=utf-8');
    res.json({
        code: 0,
        list: [
            { id: 1, title: '前端大神' },
            { id: 2, title: '前端小白' },
            { id: 3, title: '前端大佬' },
        ],
    });
});

app.listen(3000, () => {
    console.log('mock is running');
});