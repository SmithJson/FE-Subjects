var prizeEle = document.querySelector('.prize'),
    canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d'),
    width = canvas.width,
    height = canvas.height,
    prize = [
        '一等奖',
        '二等奖',
        '特等奖',
        '谢谢惠顾',
    ],
    priceIndex = Math.floor(Math.random() * prize.length);

// 绘制 mask
ctx.beginPath();
ctx.fillStyle = '#ccc';
ctx.fillRect(0, 0, width, height);

canvas.onmousedown = function () {
    canvas.onmousemove = function (e) {
        var x = e.offsetX,
            y = e.offsetY;

        ctx.save();
        ctx.translate(-5, -5);
        ctx.clearRect(x, y, 10, 10);
        ctx.restore();
    };
    canvas.onmouseup = function () {
        this.onmousemove = null;
        this.onmouseup = null;
    };
};

prizeEle.innerText = prize[priceIndex];
