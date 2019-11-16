var canvas = document.querySelector('#cvs');

if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    ctx.save(); // 保存原来的基准点
    ctx.translate(50, 50);
    ctx.fillStyle = 'red';
    ctx.fillRect(0, 0, 150, 70);
    ctx.restore(); // 还原原来的基准点

    ctx.fillStyle = 'green';
    ctx.fillRect(0, 0, 50, 70);

    // 缩放
    ctx.save();
    ctx.translate(250, 250);
    ctx.scale(1.5, 0.5);
    ctx.fillStyle = 'blue';
    ctx.fillRect(0, 0, 50, 70);
    ctx.restore();

    ctx.fillStyle = 'pink';
    ctx.fillRect(100, 100, 150, 70);

    // translate(x, y)：参考点偏移
    // scale(x, y)：放大缩小
    // transform(a, b, c, d, e, f) X 轴缩放 X轴倾斜 Y 轴缩放 Y轴倾斜 X 轴移动 Y 轴移动

    // 渐变
    // function drawGradient() {
    //     ctx.beginPath();
    //     ctx.translate(50, 50);
    //     // 创建线性渐变
    //     var grd = ctx.createLinearGradient(0, 0, 200, 0);
    //     // 镜像渐变
    //     // ctx.createRadialGradient(x, y, r, x1, x2, r2)
    //
    //     grd.addColorStop(0, 'red');
    //     grd.addColorStop(0.5, 'pink');
    //     grd.addColorStop(1, 'blue');
    //     ctx.lineWidth = 8;
    //     ctx.strokeStyle = grd;
    //     ctx.arc(100, 100, 50, 0, 2 * Math.PI, false);
    //     ctx.stroke();
    // }
    //
    // drawGradient();

    // 绘制笑脸
    // ctx.translate(300, 60);
    // ctx.beginPath();
    // ctx.arc(75, 75, 50, 0, 2 * Math.PI, true);
    // ctx.moveTo(110, 75);
    // ctx.arc(75, 75, 35, 0, Math.PI, false);
    // ctx.moveTo(65, 65);
    // ctx.arc(55, 65, 10, 0, 2 * Math.PI, true);
    // ctx.moveTo(105, 65);
    // ctx.arc(95, 65, 10, 0, 2 * Math.PI, true);
    // ctx.stroke();

    // 绘制网格
    // function drawLine(stepX, stepY) {
    //     var canvasWidth = canvas.width;
    //     var canvasHeight = canvas.height;
    //
    //     ctx.lineWidth = 0.5;
    //     ctx.strokeStyle = 'green';
    //
    //     // 绘制竖线
    //     for (var i = stepX + 1; i < canvasWidth; i += stepX) {
    //         ctx.beginPath();
    //         ctx.moveTo(i, 0);
    //         ctx.lineTo(i, canvasHeight);
    //         ctx.stroke();
    //     }
    //
    //     // 绘制横线
    //     for (var j = stepY + 1; j < canvasHeight; j += stepY) {
    //         ctx.beginPath();
    //         ctx.moveTo(0, j);
    //         ctx.lineTo(canvasWidth, j);
    //         ctx.stroke();
    //     }
    // }
    //
    // drawLine(125, 50);
}