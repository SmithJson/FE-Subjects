/*
 * @Author: zhangl
 * @Date: 2020-01-24 01:44:24
 * @GitHub: https://github.com/SmithJson
 * @LastEditors  : zhangl
 * @LastEditTime : 2020-01-28 02:28:26
 * @Description: Do not edit
 * @FilePath: /FE-Subjects/Node-web-server/src/router/user.js
 */
const {
    SuccessModel,
    ErrorModel,
} = require('../model/resModel');
const { loginCheck } = require('../controller/user');

const handleUserRouter = async (req, res) => {
    const {
        method,
        path,
        body,
    } = req;

    if (method === 'POST' && path === '/api/user/login') {
        const data = await loginCheck(body);
        const { username } = data;

        if (username) return new SuccessModel();

        return new ErrorModel('登录失败');
    }
};

module.exports = handleUserRouter;