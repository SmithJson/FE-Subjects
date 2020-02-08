/*
 * @Author: zhangl
 * @Date: 2020-01-07 23:48:47
 * @GitHub: https://github.com/SmithJson
 * @LastEditors  : zhangl
 * @LastEditTime : 2020-01-08 00:23:33
 * @Description: Do not edit
 * @FilePath: /FE-Subjects/Node/2.http/code/websock.js
 */
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