# Node event模块和fs模块

[toc]

## event模块 {ignore=true}

### 模块使用原因

JS单线程

### 事件注册和执行

- on：事件注册
- prependListener：事件提前到队列头部
- once：事件注册
- emit：事件执行
- removeListener：解除事件
- removeAllListeners：解除所有事件

## fs模块

- fs.readFile(file[, options], callback)：异步获取文件内容
- fs.readFileSync(file[, options])：同步获取文件内容
- fs.writeFile(file, data[, options], callback)：异步写入文件内容（会覆盖原文件内容）
- fs.writeFileSync(file, data[, options])：同步写入文件内容
- fs.stat(path, callback)：异步获取文件信息
- fs.statSync(path)：同步获取文件信息
- fs.mkdir(path[, mode], callback)：异步创建文件夹
- fs.mkdirSync(path[, mode])：同步创建文件夹
- fs.readdir(path[, options], callback)：异步读取文件夹里的文件
- fs.readdirSync(path[, options])：同步读取文件夹里的文件

