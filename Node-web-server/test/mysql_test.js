/*
 * @Author: zhangl
 * @Date: 2020-01-28 00:05:02
 * @GitHub: https://github.com/SmithJson
 * @LastEditors  : zhangl
 * @LastEditTime : 2020-01-29 23:19:42
 * @Description: Do not edit
 * @FilePath: /FE-Subjects/Node-web-server/test/mysql_test.js
 */
const mysql = require('mysql');

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port: '3306',
    password: 'zl123456',
    database: 'myblog',
});

// 连接数据库
con.connect();

const SELECT_BLOG_LIST = 'SELECT * FROM blogs';

// 执行查询语句
con.query(SELECT_BLOG_LIST, (err, result) => {
    if (err) {
        return;
    }

    console.log(JSON.parse(JSON.stringify(result)));
});

// 断开连接
con.end();