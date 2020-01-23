/*
 * @Author: zhangl
 * @Date: 2020-01-24 01:44:24
 * @GitHub: https://github.com/SmithJson
 * @LastEditors  : zhangl
 * @LastEditTime : 2020-01-24 01:55:34
 * @Description: Do not edit
 * @FilePath: /FE-Subjects/Node-web-server/src/router/user.js
 */
const handleUserRouter = (req, res) => {
    const {
        method,
        path,
    } = req;

    if (method === 'POST' && path === '/api/user/login') {
        return {
            msg: '这是用户登录接口',
        };
    }
};

module.exports = handleUserRouter;