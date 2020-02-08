/*
 * @Author: zhangl
 * @Date: 2020-01-10 18:28:30
 * @GitHub: https://github.com/SmithJson
 * @LastEditors  : zhangl
 * @LastEditTime : 2020-01-10 19:55:21
 * @Description: Do not edit
 * @FilePath: /FE-Subjects/Node/3.http(2)/code/ws.js
 */
const WebSocket = require('ws').Server;

const wss = new WebSocket({
    port: 3000,
    maxPayload: 6000, // 最多同时在线人数
});

wss.on('connection', function (ws) {
    console.log('ws 连接成功');

    ws.on('message', (data) => {
        // clients 客户端的连接 socket 服务的用户
        wss.clients.forEach(client => {
            client.send(data);
        });
    });

    ws.on('error', (msg) => {
        console.log(`错误: ${msg}`);
    });

    ws.on('close', () => {
        console.log('服务关闭');
    });
;});