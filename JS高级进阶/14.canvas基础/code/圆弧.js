var canvas = document.querySelector('#cvs');

if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    // arc(x, y, radius, start, end, 方向(true: 1 逆时针, false: 0 顺时针))
    var angle = Math.PI / 180 * 60;
    /* 绘制一个实心的圆 */
    ctx.beginPath();
    ctx.fillStyle = '#ff6600';
    ctx.arc(70, 70, 60, 0, 2 * Math.PI, true);
    ctx.fill();

    /* 绘制一个描边的圆 */
    ctx.beginPath();
    ctx.strokeStyle = 'green';
    ctx.arc(200, 70, 60, 0, angle, true);
    ctx.stroke();
}