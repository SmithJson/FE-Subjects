/*
 * @Author: zhangl
 * @Date: 2020-01-28 00:22:53
 * @GitHub: https://github.com/SmithJson
 * @LastEditors  : zhangl
 * @LastEditTime : 2020-02-02 00:39:07
 * @Description: mysql 连接封装
 * @FilePath: /FE-Subjects/Node-web-server/src/db/mysql.js
 */
const mysql = require('mysql');
const { MYSQL_CONNECTION } = require('../config/db');

const con = mysql.createConnection(MYSQL_CONNECTION);

con.connect();

function execute(...arg) {
    return new Promise((resolve, reject) => {
        con.query(...arg, (err, result) => {
            if (err) {
                reject(err);

                return;
            }
            resolve(result);
        });
    });
}

module.exports = {
    execute,
};