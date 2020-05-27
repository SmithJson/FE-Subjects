const mysql = require("mysql2");
/*建立数据库链接  连接配置 */
// createPool
//getConnection
// createPool 连接池    --- getConnection  获取到连接对象 操作后建议主动的释放连接
// createConnection方法创建连接对象   -- connect  
// 使用createConnection方法创建一个表示与mysql数据库服务器之间连接的connection对象

var conn = mysql.createConnection({
  host:'127.0.0.1',
  user: 'root',
  password: 'root',  // 修改为你的密码
  port: '3306',
  database: 'ruanmoutest'  // 请确保数据库存在
});

 // 连接
 conn.connect((err) => {
  if(err) {
      throw(err);
  }
  console.log('数据库连接成功！')
})


// 查询 conn.query() 执行sql语句      --- mysql  
//  conn.execute   执行sql语句   conn.query()   -mysql2
// 创建表
const CREATE_SQL = `CREATE TABLE IF NOT EXISTS test (
    id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(45) NULL,
    age INT NULL,
    message VARCHAR(45) NULL,
    PRIMARY KEY (id))`;
const INSERT_SQL = `INSERT INTO test(username,age,message) VALUES(?,?,?)`;  // 使用占位符
const SELECT_SQL = `SELECT * FROM test`;
// conn.query(CREATE_SQL, (err, data) => {
//     if (err) {
//         throw err;
//     }
//     // 插入数据
    
//     // conn.query(`INSERT INTO test(username,age) VALUES('mk',20)`, (err, result) => {
//     conn.query(INSERT_SQL, ['song','10',"hello,world"], (err, result) => {
//         if (err) {
//         throw err;
//     }
   
//     conn.query(SELECT_SQL, (err, results) => {
//         console.log(JSON.stringify(results));
//         conn.end(); // 若query语句有嵌套，则end需在此执行
//     })
//     });
// });

conn.query(`INSERT INTO test(username,age) VALUES('test3',20)`);
