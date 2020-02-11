/*
 * @Author: zhangl
 * @Date: 2020-02-11 21:29:24
 * @LastEditors  : zhangl
 * @LastEditTime : 2020-02-11 21:33:42
 * @GitHub: https://github.com/SmithJson
 * @FilePath: /FE-Subjects/blog-express/routes/blog.js
 * @Description: blog router
 */
const express = require('express');
const router = express.Router();

router.get('/list', function (req, res, next) {
    res.json({
        errno: 0,
        data: [
            {
                id: 1,
                name: '一叶小和尚',
            },
        ],
    });
});

router.get('/detail', function (req, res, next) {
    res.json({
        errno: 0,
        data: {
            id: 1,
            name: '一叶小和尚',
        },
    });
});

module.exports = router;
