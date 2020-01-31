/*
 * @Author: zhangl
 * @Date: 2020-01-28 00:22:33
 * @GitHub: https://github.com/SmithJson
 * @LastEditors  : zhangl
 * @LastEditTime : 2020-02-01 01:17:51
 * @Description: mysql 配置
 * @FilePath: /FE-Subjects/Node-web-server/src/config/db.js
 */
const { env: { NODE_ENV } } = process;

let MYSQL_CONNECTION;
let REDIS_CONNECTION;

if (NODE_ENV === 'dev') {
    // mysql
    MYSQL_CONNECTION = {
        host: 'localhost',
        user: 'root',
        port: '3306',
        password: 'zl123456',
        database: 'myblog',
    };

    // redis
    REDIS_CONNECTION = {
        port: 6379,
        host: '127.0.0.1',
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

    REDIS_CONNECTION = {
        port: 6379,
        host: '127.0.0.1',
    };
}

module.exports = {
    MYSQL_CONNECTION,
    REDIS_CONNECTION,
};