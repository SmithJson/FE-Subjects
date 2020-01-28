/*
 * @Author: zhangl
 * @Date: 2020-01-24 01:44:24
 * @GitHub: https://github.com/SmithJson
 * @LastEditors  : zhangl
 * @LastEditTime : 2020-01-29 03:48:13
 * @Description: Do not edit
 * @FilePath: /FE-Subjects/Node-web-server/src/router/user.js
 */
const {
    SuccessModel,
    ErrorModel,
} = require('../model/resModel');
const { login } = require('../controller/user');

const handleUserRouter = async (req, res) => {
    const {
        method,
        path,
        body,
    } = req;

    if (method === 'POST' && path === '/api/user/login') {
        const data = await login(body);
        const { username } = data;

        res.setHeader('Set-Cookie', `username=${username}; path=/;`);

        if (username) return new SuccessModel();

        return new ErrorModel('登录失败');
    }
};

module.exports = handleUserRouter;