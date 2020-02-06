/*
 * @Author: zhangl
 * @Date: 2020-01-26 17:06:23
 * @GitHub: https://github.com/SmithJson
 * @LastEditors  : zhangl
 * @LastEditTime : 2020-02-06 22:12:15
 * @Description: Do not edit
 * @FilePath: /FE-Subjects/Node-web-server/src/controller/user.js
 */
const xss = require('xss');
const { getPassword } = require('../../utils/cryp');
const {
    execute,
    escape,
} = require('../db/mysql');

const login = ({ username, password }) => {
    const newUsername = escape(username);
    const newPassword = escape(getPassword(password));
    const sql = `
        SELECT username, realname
        FROM users
        WHERE username=${xss(newUsername)} AND password=${xss(newPassword)}
    `;

    return execute(sql).then(result => {
        return result[0] || {};
    });
};

module.exports = {
    login,
};