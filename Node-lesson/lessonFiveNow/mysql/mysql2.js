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

    ret = await connection.execute(`
            INSERT INTO test(message)
            VALUES(?)
    `, ['ABC'])
    console.log('insert:', ret)


    ret = await connection.execute(`
            SELECT * FROM test
    `)
    console.log(JSON.stringify(ret[0]))
    // console.log(ret[1])

    connection.end()

})()    