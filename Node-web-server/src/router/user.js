/*
 * @Author: zhangl
 * @Date: 2020-01-24 01:44:24
 * @GitHub: https://github.com/SmithJson
 * @LastEditors  : zhangl
 * @LastEditTime : 2020-02-03 19:20:51
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

    if (method === 'GET' && path === '/api/user/login') {
        console.log(body)
        const data = await login(query);
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