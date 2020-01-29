/*
 * @Author: zhangl
 * @Date: 2020-01-28 00:22:33
 * @GitHub: https://github.com/SmithJson
 * @LastEditors  : zhangl
 * @LastEditTime : 2020-01-29 23:45:16
 * @Description: mysql 配置
 * @FilePath: /FE-Subjects/Node-web-server/src/config/db.js
 */
const { env: { NODE_ENV } } = process;

let MYSQL_CONNECTION;

if (NODE_ENV === 'dev') {
    MYSQL_CONNECTION = {
        host: 'localhost',
        user: 'root',
        port: '3306',
        password: 'zl123456',
        database: 'myblog',
    };
}

if (NODE_ENV === 'prod') {
    MYSQL_CONNECTION = {
        host: 'localhost',
        user: 'root',
        port: '3306',
        password: 'zl123456',
        database: 'myblog',
    };
}

module.exports = {
    MYSQL_CONNECTION,
};