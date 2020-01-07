# http、https { ignore=true }

[toc]

## http 特点

- 无状态：不会保存上一次请求状态
- 无连接：每次只处理一个请求，且再客户端得到响应后，立即断开连接
- 简单方便：只需要发送请求方法和路径
- 灵活：http可以传输任何类型的数据对象
- 支持客服-服务器模式


## 建立 HTTP 服务

```javascript
const http = require('http');

const ALLOW_METHODS = [
    'GET',
    'PATCH',
    'DELETE',
    'POST',
    'PUT',
    'OPTIONS',
],
ALLOW_ORIGINS = [
    'http://127.0.0.1:5500',
],
ALLOW_HEADERS = [
    'Authorization',
    'Content-Type',
    'X-Token',
],
ALLOW_CONTENT_TYPE = [
    'Application/json',
    'charset=uft-8',
];


const app = new http.createServer();

app.on('request', (request, response) => {
    const {
        method,
        headers
    } = request;
    const data = {
        name: '一叶小和尚-test数据',
        version: '1.0.0',
        headers,
        method,
    };

    // 允许访问的请求源
    response.setHeader('Access-Control-Allow-Origin', ALLOW_ORIGINS.join(','));
    // 允许请求的方式
    response.setHeader('Access-Control-Allow-Methods', ALLOW_METHODS.join(','));
    // 允许传递的请求头
    response.setHeader('Access-Control-Allow-Headers', ALLOW_HEADERS.join(','));
    // 允许传递 cookie
    response.setHeader('Access-Control-Allow-Credentials', true);
    // 允许请求的 MIME 类型
    response.setHeader('Content-Type', ALLOW_CONTENT_TYPE.join(','));

    if (method === 'OPTIONS') {
        response.statusCode = 200;
        response.end();
    } else {
        response.statusCode = 200;
        response.setHeader('Set-Cookie', 'foo=bar');
        response.end(JSON.stringify(data));
    }
});

app.listen(3000, () => {
    console.log('server is running');
});
```

## 建立 TCP 服务

使用终端访问服务器

```javascript
const net = require('net');

const app = net.createServer((client) => {
    client.write('hello world!');
});

app.listen(3000, (res) => {
    console.log('server is running');
});
```

## 建立 HTTPS 服务

生成本地 SSL 证书

```bash
openssl req -newkey rsa:2048 -new -nodes -x509 -days 3650 -keyout key.pem -out cert.pem
```

```javascript
const https = require('https');
const fs = require('fs');

const key = fs.readFileSync('./key.pem');
const cert = fs.readFileSync('./cert.pem');
const options = {
    key,
    cert,
};

const app = https.createServer(options, (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.writeHead(200);
    response.end('hello world!');
});

app.listen(3000, () => {
    console.log('server is running');
});
```

## 建立 WebSocket（通信协议） 服务

客户端信息需要实时更新

客户端常用事件（服务端的事件一样）

- open：打开连接；connection 服务端接受连接
- message：接受服务端的响应
- Error：请求错误
- close：断开连接
- send：发送给服务端

使用第三方库

- ws

客户端可以使用原生的 socket api

浏览器兼容性不好，最少得ie9以上

- socket.io

服务器与客户端都必须使用 socket.io 提供的 api

兼容性好

```javascript
// 服务端
const WebSocket = require('ws').Server;

const wss = new WebSocket({
    port: 3000,
});

wss.on('connection', (ws) => {
    let timerId = null;

    ws.on('message', (msg) => {
        // repeatFun('你好');
        clearInterval(timerId);

        timerId = setInterval(() => {
            ws.send(`你好 - ${msg} - ${new Date().toLocaleString()}`);
        }, 1000);
    });

    ws.on('close', () => {
        clearInterval(timerId);
    })
});

// 客户端
const msgShow = document.getElementsByClassName('msg')[0];
const msgSendInput = document.getElementsByClassName('i-msg')[0];
const btnSend = document.getElementsByClassName('send-btn')[0];
const ws = new WebSocket('ws://localhost:3000');

function sendMessage(data) {
    ws.send(data);
}

ws.onopen = function (e) {
    sendMessage('zhangl');
};

ws.onmessage = function (res) {
    msgShow.innerHTML = res.data;
};

btnSend.onclick = function () {
    sendMessage(msgSendInput.value);
};
```