/*
 * @Author: zhangl
 * @Date: 2020-01-12 22:41:31
 * @GitHub: https://github.com/SmithJson
 * @LastEditors  : zhangl
 * @LastEditTime : 2020-01-12 22:50:30
 * @Description: birds模块
 * @FilePath: /FE-Subjects/Node/4.express/code/birds.js
 */
const express = require('express');

const router = express.Router();

// 请求时间显示中间件
router.use((req, res, next) => {
    console.log(`Date ${Date.now()}`);
    next();
});

router
    .route('/home')
    .get((req, res) => {
        res.json({
            home: 'Birds home page',
        });
    });

router.get('/about', (req, res) => {
    res.json({
        home: 'About page',
    });
});

module.exports = router;
