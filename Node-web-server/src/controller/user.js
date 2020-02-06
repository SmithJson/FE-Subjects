/*
 * @Author: zhangl
 * @Date: 2020-01-26 17:06:23
 * @GitHub: https://github.com/SmithJson
 * @LastEditors  : zhangl
 * @LastEditTime : 2020-02-06 20:36:38
 * @Description: Do not edit
 * @FilePath: /FE-Subjects/Node-web-server/src/controller/user.js
 */
const {
    execute,
    escape,
} = require('../db/mysql');

const login = ({ username, password }) => {
    const sql = `
        SELECT username, realname
        FROM users
        WHERE username=${escape(username)} AND password=${escape(password)}
    `;

    return execute(sql).then(result => {
        return result[0] || {};
    });
};

module.exports = {
    login,
};