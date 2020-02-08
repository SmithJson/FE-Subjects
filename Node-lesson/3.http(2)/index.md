# http 2 {ignore=true}

[toc]

## 名词

- 长轮询：客户端在接受到服务端的响应后，才会发送下一个请求
- 短轮询：客户端不管由没有收到服务端的响应，都会以固定间隔向服务端发送请求
- 长连接：在一个 TCP 连接上可以发送多个数据包，如果没有数据包发送，通过发送心跳包来维持连接
- 短连接：建立 TCP 连接，客户端接受到服务端的响应后，断开连接
- 单工：方向单一，只能是 A（发送方）-> B（接收方）
- 半双工：方向双向，A既可以是发送方，也可以是接收方，B也一样，但在同一时刻，只能能向一个方向
- 双工：在半双工的基础上，可以同时发送和接受数据

## socket.io

## API

- connect（客户端）/ connection（服务端）：建立连接
- message：接受消息
- emit：广播自定义事件
- disconnect：断开连接

```javascript
const socket = require('socket.io');
const http = require('http');

const app = http.createServer();
const io = socket.listen(app);

io.on('connection', function (socket) {
    // 广播事件给客户端
    socket.emit('test', {
        key: 'id',
        name: '19951060119',
    });

    // 接受客户端传递的广播事件
    socket.on('client-send', (data) => {
        console.log(data);
        socket.emit('test', data);
    });

    socket.on('disconnect', () => console.log('server is disconnect'));
});

app.listen(3000, () => console.log('server is running!'));
```

## Connect 中间件

简化创建服务操作

中间件：参数数据处理过程，返回处理过后的数据

- body-parser：获取 post 请求体内容
- cors：处理跨域请求
- formidable：处理文件上传



