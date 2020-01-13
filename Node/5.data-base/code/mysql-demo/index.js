/*
 * @Author: zhangl
 * @Date: 2020-01-13 17:24:05
 * @GitHub: https://github.com/SmithJson
 * @LastEditors  : zhangl
 * @LastEditTime : 2020-01-13 21:39:22
 * @Description: node 连接 mysql
 * @FilePath: /FE-Subjects/Node/5.data-base/code/mysql-demo/index.js
 */
const mysql = require('mysql');

const config = {
    host: 'localhost',
    user: 'root',
    password: 'zl123456',
    port: '3306',
    database: 'ruanmoutest',
};
// 建立数据链接
// createConnection：connect
// createPool：getConnection
const pool = mysql.createPool(config);
// query：执行 SQL 语句
const CREATE_TABLE_SQL = `
    CREATE TABLE IF NOT EXISTS Test(
        id INT NOT NULL AUTO_INCREMENT,
        username VARCHAR(45) NULL,
        age INT NULL,
        message VARCHAR(45) NULL,
        PRIMARY KEY(id)
    );
`;
const INSERT_SQL = `
    INSERT INTO Test(username, age, message)
    VALUES (?, ?, ?);
`;
const SELECT_SQL = `SELECT * FROM Test`;

// connect：连接
pool.getConnection((err, conn) => {
    if (err) throw err;
    console.log('MySql is connected success');

    conn.query(CREATE_TABLE_SQL, (err, data) => {
        if (err) throw err;

        // 插入数据
        conn.query(INSERT_SQL, ['一叶小和尚', 20, '世上本无鬼，庸人自扰之'], (err, result) => {
            if (err) throw err;

            // 查询数据
            conn.query(SELECT_SQL, (err, result) => {
                if (err) throw err;
                console.log(JSON.stringify(result));
                // 放回连接池
                conn.release();
                // conn.end(); // query里包含嵌套时使用
            });
        });
    });
});