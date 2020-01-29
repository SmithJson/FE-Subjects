/*
 * @Author: zhangl
 * @Date: 2020-01-24 01:44:24
 * @GitHub: https://github.com/SmithJson
 * @LastEditors  : zhangl
 * @LastEditTime : 2020-01-29 23:52:06
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
        // body,
        query,
        cookie,
    } = req;

    if (method === 'GET' && path === '/api/user/login') {
        // const data = await login(body);
        const data = await login(query);
        const {
            username,
            realname,
        } = data;

        if (username) {
            req.session.username = username;
            req.session.realname = realname;
            return new SuccessModel(req.session);
        }

        return new ErrorModel('登录失败');
    }

};

module.exports = handleUserRouter;