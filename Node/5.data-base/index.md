# 数据库 {ignore=true}

[toc]

## Node.js 中实现数据持久化

## 文件系统

```javascript
const fs = require('fs');
const readline = require('readline');
const path = require('path');

const filePath = path.join(__dirname, './db.json');

// 读取文件内容
function get(name) {
    fs.readFile(filePath, {
        encoding: 'utf-8',
    }, (err, data) => {
        const res = JSON.parse(data);

        console.log(`${name} 的值为 ${res[name]}`);
    });
}

// 向文件写内容
function set(name, value) {
    fs.readFile(filePath, {
        encoding: 'utf-8',
    }, (err, data) => {
        const res = JSON.parse(data);

        res[name] = value;
        fs.writeFile(filePath, JSON.stringify(res), {
            encoding: 'utf-8',
        }, () => console.log('writed was success'));
    });
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'input >',
});

function handler(command) {
    const [operate, key, value] = command.split(/\s+/);

    switch(operate) {
        case 'get':
            get(key);
            break;
        case 'set':
            set(key, value);
            break
        default:
            console.log(`${operate} is not illegal`);
    }
}

rl.prompt();
rl.on('line', handler);
```

## 数据库

npm 包：mysql、mysql2

mysql2：对 mysql 的功能增加，支持了 promise 化，使用 conn.execute 执行 sql 语句

```javascript
const mysql = require('mysql');

// 建立数据链接
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'zl123456',
    port: '3306',
    database: 'ruanmoutest',
});

// connect 连接
conn.connect(err => {
    if (err) throw err;
    console.log('MySql is connected success');
});
```

## 对表数据的常用操作

```sql
-- 查询数据
SELECT <列名1>, <列名2>
FROM 表名
WHERE <条件1> [AND|OR] <条件2>
GROUP BY <列名>
HAVING <条件>
ORDER BY ASC(升序)|DES(降序)

-- 添加数据
INSERT INTO 表名(列名1, 列名2)
VALUES(值1, 值2)

-- 更新数据
UPDATE 表名
SET 列名操作
WHERE 条件

-- 删除数据
DELETE FROM 表名
WHERE 条件

-- 修改表结构
ALTER TABLE 表名 op column1
```

```javascript
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
```

## ORM 模块 sequelize

## 登陆接口及鉴权 Token

步骤：

1. 客户端使用用户名和密码请求登录
2. 服务端接受请求，去验证用户名和密码
3. 验证成功后，服务端会签发一个 Token，再把这个 Token 发送给客户端
4. 客户端将受到的 Token 存储起来
5. 客户每次发送请求的时候需要着服务端签发的 Token
6. 服务端接受到 Token，然后去验证 Token 的真伪，如果验证成功，就向客户端发送请求的数据

