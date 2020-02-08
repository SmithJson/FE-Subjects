/*
 * @Author: zhangl
 * @Date: 2020-01-10 23:59:57
 * @GitHub: https://github.com/SmithJson
 * @LastEditors  : zhangl
 * @LastEditTime : 2020-01-11 00:11:45
 * @Description: Do not edit
 * @FilePath: /FE-Subjects/Node/3.http(2)/code/socket.js
 */
const socket = io.connect('ws://localhost:3000');

socket.on('connect', () => showMessage('服务开启'));
socket.on('disconnect', () => showMessage('服务关闭'));
socket.on('test', (data) => showMessage(`接受的数据 ${JSON.stringify(data)}`));

function sendMessageToServer(msgData) {
    socket.emit('client-send', msgData);
}

function showMessage(str) {
    var txt = document.getElementById('txtConsole');
    txt.value = txt.value + '\n' + str;

}

// 向服务端发送数据
function sendMsgHandler() {
    var elem = document.getElementById('chatpIpt');
    var iptValue = elem.value;
    sendMessageToServer({ data: iptValue });
    elem.value = "";
    elem.focus();
}