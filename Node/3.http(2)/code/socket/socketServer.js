/*
 * @Author: zhangl
 * @Date: 2020-01-10 23:44:08
 * @GitHub: https://github.com/SmithJson
 * @LastEditors  : zhangl
 * @LastEditTime : 2020-01-11 00:19:31
 * @Description: socket.io
 * @FilePath: /FE-Subjects/Node/3.http(2)/code/socket-io.js
 */
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

    // 接受客户端传递的广播
    socket.on('client-send', (data) => {
        console.log(data);
        socket.emit('test', data);
    });

    socket.on('disconnect', () => console.log('server is disconnect'));
});

app.listen(3000, () => console.log('server is running!'));