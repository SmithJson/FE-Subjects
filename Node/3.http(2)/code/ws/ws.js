const msgShow = document.querySelector('.content');
const msgSendInput = document.querySelector('.send-box input');
const btnSend = document.querySelector('.send-box button');
const ws = new WebSocket('ws://localhost:3000');

function sendMessage(data) {
    ws.send(data);
}

ws.onopen = function (e) {
    // sendMessage('zhangl');
};

ws.onmessage = function (data) {
    const res = JSON.parse(data.data);

    clearTimeout(msgShow.timer);
    msgSendInput.value = '';
    msgShow.innerHTML += `
        <div class="${res.name === btnSend.id ? 'mine' : 'other'}">
            <p class="role">${res.name === btnSend.id ? 'me' : res.name}</p>
            <p class="speak">${res.value}</p>
        </div>
    `;
    msgShow.timer = setTimeout(() => {
        window.scrollTo(0, msgShow.scrollHeight);
    }, 10);
};

btnSend.onclick = function () {
    sendMessage(JSON.stringify({
        name: btnSend.id,
        value: msgSendInput.value,
    }));
};