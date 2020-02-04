/*
 * @Author: zhangl
 * @Date: 2020-01-24 01:44:24
 * @GitHub: https://github.com/SmithJson
 * @LastEditors  : zhangl
 * @LastEditTime : 2020-02-05 02:26:23
 * @Description: Do not edit
 * @FilePath: /FE-Subjects/Node-web-server/src/router/user.js
 */
const {
    SuccessModel,
    ErrorModel,
} = require('../model/resModel');
const { login } = require('../controller/user');
const { set } = require('../db/myredis');

const handleUserRouter = async (req, res) => {
    const {
        method,
        path,
        body,
        query,
        cookie,
    } = req;

    if (method === 'POST' && path === '/api/user/login') {
        const data = await login(body);
        const {
            username,
            realname,
        } = data;

        if (username) {
            req.session.username = username;
            req.session.realname = realname;
            set(req.sessionId, req.session);

            return new SuccessModel(req.session);
        }

        return new ErrorModel('登录失败');
    }

};

module.exports = handleUserRouter;