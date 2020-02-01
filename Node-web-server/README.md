# Node 学习 {ignore=true}

[toc]

## ECMAScript、JavaScript、Nodejs

- ECMAScript：语法规范
- JavaScript: JS 语法 + web Api
- Nodejs：JS 语法 + node Api

## server 开发和前端开发的区别

- 服务稳定性（PM2做进程守候）
- 考虑内存和 CPU（stream 写日志，使用 redis 存 session）
- 日志记录（重要）
- 安全
- 集群和服务拆分

## get 请求

get 请求即客户端向服务端获取数据，如查询列表

通过 queryString 传递数据，如 index.html?name=zhangl

```javascript
const http = require('http');
const querystring = require('querystring');

const server = http.createServer((req, res) => {
    console.log('method：', req.method);
    console.log('url：', decodeURIComponent(req.url));
    res.query = querystring.parse(req.url.split('?')[1]);
    res.setHeader('Content-Type', 'application/json;charset=utf-8');
    res.end(JSON.stringify(res.query));
});

server.listen(3000, () => console.log('OK'));
```

## post 请求

```javascript
const http = require('http');
const querystring = require('querystring');

const server = http.createServer((req, res) => {
    const { method, headers } = req;
    let postData = '';

    if (method === 'POST') {
        // 接受数据
        req.on('data', chunk => {
            console.log('Content-Type', headers['content-type']);
            console.log('chunk：', chunk);
            postData += chunk.toString();
        });

        // 数据接受完毕
        req.on('end', () => {
            console.log('postData：', postData);
            res.setHeader('Content-Type', 'application/json;charset=utf-8');
            res.end(JSON.stringify(postData));
        });
    }
});

server.listen(3000, () => console.log('OK'));
```

## post、get综合

```javascript
const http = require('http');
const querystring = require('querystring');

const server = http.createServer((req, res) => {
    const {
        method,
        url,
    } = req;
    const newUrl = decodeURIComponent(url);
    const path = newUrl.split('?')[0];
    const query = querystring.parse(newUrl.split('?')[1]);
    const data = {
        method,
        path,
        query,
        url: newUrl,
    };

    res.setHeader('Content-Type', 'application/json;charset=utf-8');

    if (method === 'GET') {
        res.end(JSON.stringify(data));

        return;
    };

    if (method === 'POST') {
        let postData = '';

        req.on('data', chunk => postData += chunk.toString());
        req.on('end', () => {
            data.postData = postData;
            res.end(JSON.stringify(data));
        });

        return;
    }
});

server.listen(3000, () => console.log('OK'));
```

## 抽离代码

- bin：创建 http 服务
- app.js：对请求服务的集中处理
- router：路由代码管理
- model：返回数据模型
- controller：处理需要返回数据

## cookie

存储在浏览器的一段字符串（最大为 5KB）

- 跨域不共享
- 每次发送 http 请求，会将请求域的 cookie 一起发送给 server
- server 可以修改 cookie 并发送给服务器
- 浏览器中可以通过 javascript 修改 cookie （有限制）

服务端设置 cookie

```javascript
// httpOnly：不允许前端对 cookie 操作
res.setHeader('Set-Cookie', 'name=value; path=/; httpOnly');
```

前端设置 cookie

```javascript
document.cookie = 'name=value;';
```

## session

解决 cookie 的安全性问题

## redis

web server 最常用的缓存数据库，数据存在内存中，是一种键值存储

相较于 mysql 读取速度更快，（mysql 数据存在硬盘中，redis 数据存在内存中）

### 不适的场景

1. 操作频率不是很高
2. 断电不能丢失
3. 数据量太大，内存成本太高

### 安装

```bash
brew install redis
```

### 启动 redis 服务

```bash
# 启动 redis 服务
redis-server
# 进入 redis 模式
redis-cli

# 以下都是在 redis cli 模式相爱进行的命令
# 查看所有键名
keys *

# 设置键值
set myname zhangl

# 获取键值
get myname

# 删除键值
del myname

# 删除所有键
FLUSHDB
```

## nginx

高性能的 web 服务器，开源免费

一般用于静态服务、负载均衡、反向代理

## nginx 命令

```bash
# 配置文件位置
Windows：C:\\nginx\\conf\\nginx.conf
# usr：我的目录叫 usr，但有些电脑是 user
Mac：/usr/local/etc/nginx/nginx.conf

# 检测 nginx 配置文件格式是否正确
nginx -t

# 启动 nginx
nginx

# 重启|停止 nginx
nginx -s reload|stop
```

