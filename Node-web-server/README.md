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

