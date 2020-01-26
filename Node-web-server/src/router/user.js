/*
 * @Author: zhangl
 * @Date: 2020-01-24 01:44:24
 * @GitHub: https://github.com/SmithJson
 * @LastEditors  : zhangl
 * @LastEditTime : 2020-01-26 17:10:42
 * @Description: Do not edit
 * @FilePath: /FE-Subjects/Node-web-server/src/router/user.js
 */
const {
    SuccessModel,
    ErrorModel,
} = require('../model/resModel');
const { loginCheck } = require('../controller/user');

const handleUserRouter = (req, res) => {
    const {
        method,
        path,
        body,
    } = req;

    if (method === 'POST' && path === '/api/user/login') {
        const data = loginCheck(body);

        if (data) return new SuccessModel();

        return new ErrorModel('登录失败');
    }
};

module.exports = handleUserRouter;