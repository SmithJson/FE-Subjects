#  MYSQL数据库命令

操作之前应连接某个数据库

1、建表
命令：create table <表名> ( <字段名> <类型> [,..<字段名n> <类型n>]);
```javascript
mysql> create table MyClass(
> id int(4) not null primary key auto_increment,
> username char(20) not null,
> score char(50) not null ) 
> ;
```
2、获取表结构
命令：desc 表名，或者show columns from 表名
```javascript
mysql>DESCRIBE MyClass
mysql> desc MyClass;
mysql> show columns from MyClass;
```
3、删除表
```javascript
命令：drop table <表名>
例如：删除表名为 MyClass 的表
mysql> drop table MyClass;
```
4、插入数据
命令：insert into <表名> [( <字段名>[,..<字段名n > ])] values ( 值 )[, ( 值n )]
例如，往表 MyClass中插入二条记录, 这二条记录表示：编号为的名为Tom的成绩为.45, 编号为 的名为Joan 的成绩为.99，编号为 的名为Wang 的成绩为.5.
```javascript
mysql> insert into MyClass values(1,'Tom',96.45),(2,'Joan',82.99), (2,'Wang', 96.59);
```
5、查询表中的数据
1)、查询所有行
命令：select <字段，字段，...> from < 表名 > where < 表达式 >
例如：查看表 MyClass 中所有数据
```javascript
mysql> select * from MyClass;
```
2）、查询前几行数据
例如：查看表 MyClass 中前行数据
```javascript
mysql> select * from MyClass order by id limit 0,2;
或者：
mysql> select * from MyClass limit 0,2;
```
6、删除表中数据
命令：delete from 表名 where 表达式
例如：删除表 MyClass中编号为 的记录
```javascript
mysql> delete from MyClass where id=1;
```
7、修改表中数据：update 表名 set 字段=新值,…where 条件
```javascript
mysql> update MyClass set username='Mary' where id=1;
```
7、在表中增加字段：
命令：alter table 表名 add字段 类型 其他;
例如：在表MyClass中添加了一个字段passtest，类型为int(4)，默认值为
```javascript
mysql> alter table MyClass add passtest char(50) default ' ';
```
8、更改表名：
命令：rename table 原表名 to 新表名;
例如：在表MyClass名字更改为YouClass
```javascript
mysql> rename table MyClass to YouClass;
```
更新字段内容
update 表名 set 字段名 = 新内容
update 表名 set 字段名 = replace(字段名,'旧内容','新内容')
```javascript
UPDATE MyClass SET username = 'Fred' WHERE id = 1 
```

#  MYSQL数据库连接

###  安装mysql
```javascript
yarn add mysql 
或者
npm install mysql
```

## 1 .mysql 通过 createConnection
* createConnection方法创建连接对象
正式的说法是 使用createConnection方法创建一个表示与mysql数据库服务器之间连接的connection对象

### 1.1  mysql连接数据库
```javascript
const mysql = require("mysql");
/*建立数据库链接  连接配置 */
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
```

### 1.2 操作数据库
```javascript
// 查询 conn.query()
// 创建表
const CREATE_SQL = `CREATE TABLE IF NOT EXISTS test (
                    id INT NOT NULL AUTO_INCREMENT,
                    username VARCHAR(45) NULL,
                    age INT NULL,
                    message VARCHAR(45) NULL,
                    PRIMARY KEY (id))`;
const INSERT_SQL = `INSERT INTO test(username,age,message) VALUES(?,?,?)`;  // 使用占位符
const SELECT_SQL = `SELECT * FROM test`;
conn.query(CREATE_SQL, (err, data) => {
  if (err) {
    throw err;
  }
  // 插入数据
  conn.query(INSERT_SQL, ['song','10',"hello,world"], (err, result) => {
    if (err) {
      throw err;
    }
    console.log(result);
    conn.query(SELECT_SQL, (err, results) => {
        console.log(JSON.stringify(results));
        conn.end(); // 若query语句有嵌套，则end需在此执行
    })
  });
});
```
## 2 mysql 连接 通过 createPool

* createPool连接池
连接池有助于减少连接到MySQL服务器的时间，通过重用以前的连接
可以避免查询的延迟，减少建立新连接所带来的开销。

在开发web应用程序时，连接池是一个很重要的概念。建立一个数据库连接所消耗的性能成本是很高的。在服务器应用程序中，如果为每一个接收到的客户端请求都建立一个或多个数据库连接，将严重降低应用程序性能。

因此在服务器应用程序中通常需要为多个数据库连接创建并维护一个连接池，当连接不再需要时，这些连接可以缓存在连接池中，当接收到下一个客户端请求时，从连接池中取出连接并重新利用，而不需要再重新建立连接。

//createPool
```javascript
var pool = mysql.createPool(optioins);
```
options参数包含createConnection方法中可以使用的各种属性

//getConnection
//err为错误对象，connection为获取到的连接对象。
从连接池中取出连接。

```javascript
//可以获取到连接对象 操作后建议主动的释放连接
pool.getConnection(function(err,connection))
```

//release
release方法将其归还到连接池中 
```javascript
connection.release();
```

//destroy
当一个连接不再需要使用且需要从连接池中移除时用connection对象的destroy方法。
```javascript
connection.destroy(); 
```
连接移除后，连接池中的连接数减一

//end
当一个连接池不再需要使用时，用连接池对象的end方法关闭连接池。
```javascript
pool.end();
```



### 2.1  mysql连接数据库
```javascript
const mysql = require('mysql');
// options参数包含createConnection方法中可以使用的各种属性
const pool = mysql.createPool({
    host:'127.0.0.1',
    user: 'root',
    password: 'root',  // 修改为你的密码
    port: '3306',
    database: 'ruanmoutest'  // 请确保数据库存在
});
```

### 2.2 操作数据库 ,同上
```javascript
const CREATE_SQL = `CREATE TABLE IF NOT EXISTS test (
    id INT NOT NULL AUTO_INCREMENT,
    username VARCHAR(45) NULL,
    age INT NULL,
    message VARCHAR(45) NULL,
    PRIMARY KEY (id))`;
const INSERT_SQL = `INSERT INTO test(username,age,message) VALUES(?,?,?)`;  // 使用占位符
const SELECT_SQL = `SELECT * FROM test`;

pool.getConnection(function(err,conn){
    if (err) {
        throw(err);
    }

      // 插入数据
    conn.query(INSERT_SQL, ['laney','20',"test"], (err, result) => {
        if (err) {
            throw err;
        }
        console.log(result);
        conn.query(SELECT_SQL, (err, results) => {
            console.log(JSON.stringify(results));
            conn.end(); // 若query语句有嵌套，则end需在此执行
            // conn.release();  //释放连接
        })
    });

})
```


## 2 mysql2  

mysql2 是mysql的一个扩展

安装：
```javascript
yarn add mysql2
或者
npm install mysql2
```
如果你希望 用链式结构写数据库连接， 可以选择 mysql2, 其他用法基本和mysql的使用一样

 const mysql = require('mysql2/promise')

 ```javascript
 (async () => {
      // mysql2 是mysql的一个扩展
    const mysql = require('mysql2/promise')

    // 连接配置
    const cfg = {
        host:'127.0.0.1',
        user: 'root',
        password: 'root',  // 修改为你的密码
        port: '3306',
        database: 'ruanmoutest'  // 请确保数据库存在
    }

    const connection = await mysql.createConnection(cfg)

    let ret = await connection.execute(`
        CREATE TABLE IF NOT EXISTS test (
            id INT NOT NULL AUTO_INCREMENT,
            message VARCHAR(45) NULL,
        PRIMARY KEY (id))
    `)
    console.log('create', ret)
    })()  


## 2 mysql 连接 通过 sequelize

第一步:创建一个sequelize对象实例:
 ```javascript

const Sequelize = require('sequelize');

var sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 30000
    }
});
```

第二步，定义模型Pet，告诉Sequelize如何映射数据库表：
 ```javascript
var Pet = sequelize.define('pet', {
    id: {
        type: Sequelize.STRING(50),
        primaryKey: true
    },
    name: Sequelize.STRING(100),
    gender: Sequelize.BOOLEAN,
    birth: Sequelize.STRING(10),
    createdAt: Sequelize.BIGINT,
    updatedAt: Sequelize.BIGINT,
    version: Sequelize.BIGINT
}, {
        timestamps: false
    });
```

用sequelize.define()定义Model时，传入名称pet，默认的表名就是pets。第二个参数指定列名和数据类型，如果是主键，需要更详细地指定。第三个参数是额外的配置，我们传入{ timestamps: false }是为了关闭Sequelize的自动添加timestamp的功能。所有的ORM框架都有一种很不好的风气，总是自作聪明地加上所谓“自动化”的功能，但是会让人感到完全摸不着头脑。

接下来，我们就可以往数据库中塞一些数据了。我们可以用Promise的方式写：




