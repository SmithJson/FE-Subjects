/*
 * @Author: zhangl
 * @Date: 2020-01-26 17:06:23
 * @GitHub: https://github.com/SmithJson
 * @LastEditors  : zhangl
 * @LastEditTime : 2020-01-28 02:27:10
 * @Description: Do not edit
 * @FilePath: /FE-Subjects/Node-web-server/src/controller/user.js
 */
const { execute } = require('../db/mysql');

const loginCheck = ({ username, password }) => {
    const sql = `
        SELECT username, realname
        FROM users
        WHERE username='${username}' AND password='${password}'
    `;

    return execute(sql).then(result => {
        return result[0] || {};
    });
};

module.exports = {
    loginCheck,
};