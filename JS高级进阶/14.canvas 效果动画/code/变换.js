var canvas = document.getElementById('canvas');

if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    // 平移
    // ctx.beginPath();
    // ctx.translate(200, 200);
    // ctx.rect(0, 0, 100, 100);
    // ctx.stroke();

    // 缩放
    // ctx.beginPath();
    // ctx.scale(2, 2);
    // ctx.rect(0, 0, 10, 10);
    // ctx.stroke();

    // 创建线性渐变
    // var grd = ctx.createLinearGradient(0, 0, 150, 0);
    // grd.addColorStop(0.5, 'red');
    // grd.addColorStop(0.8, 'blue');
    // ctx.fillStyle = grd;
    // // ctx.rect(100, 100, 200, 100);
    // ctx.arc(100, 50, 50, 0, 2 * Math.PI);
    // ctx.fill();

    // 保存上一个状态 返回保存的状态
    ctx.save();
    ctx.beginPath();
    ctx.translate(100, 100);
    ctx.rect(0, 0, 100, 100);
    ctx.fill();
    ctx.restore();
    ctx.rect(0, 0, 100, 100);
    ctx.fill();
}