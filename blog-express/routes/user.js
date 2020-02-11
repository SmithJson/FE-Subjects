/*
 * @Author: zhangl
 * @Date: 2020-02-11 21:29:31
 * @LastEditors  : zhangl
 * @LastEditTime : 2020-02-11 21:37:33
 * @GitHub: https://github.com/SmithJson
 * @FilePath: /FE-Subjects/blog-express/routes/user.js
 * @Description: Do not edit
 */
const express = require('express');
const router = express.Router();

router.post('/login', function (req, res, next) {
    const {
        username,
        password,
    } = req.body;

    res.json({
        errno: 0,
        data: {
            username,
            password,
        },
    });
});

module.exports = router;
