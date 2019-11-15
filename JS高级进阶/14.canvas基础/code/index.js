var canvas = document.querySelector('#cvs');

if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    // 1. 获得画笔
    // 2. 开始绘制新路径
    // 3. 设置起始点（移动笔触，把笔移动到哪去）
    // 4. 开始画图
    // 5. 画线 stroke(描边) 不能自动闭合路径 通过 ctx.closePath() 闭合路径
    // 6. fill(实心的填充) 自动闭合路径
    // 结束

    /* 画一条线 */
    // ctx.beginPath();
    // ctx.lineWidth = 20;
    // ctx.moveTo(50, 100);
    // // 定义线条的结束点
    // ctx.lineTo(80, 200);
    // ctx.lineTo(200, 220);
    // // 关闭路径，从当前点到结束点
    // ctx.closePath();
    // ctx.stroke();

    // ctx.beginPath();
    // ctx.moveTo(300, 100);
    // ctx.lineTo(120, 130);
    // ctx.lineTo(150, 220);
    // 填充样式
    // ctx.fillStyle = '#ff6600';
    // ctx.strokeStyle = '#ff6600';
    // ctx.closePath();
    // ctx.stroke();
    // ctx.fill();

    /* 画矩形 */
    // 1. 填充矩形 fillRect(x, y, width, height)
    // 2. 描边矩形 strokeRect(x, y, width, height)
    // 3. rect 路径
    // 清除矩形区域 clearRect(x, y, width, height)

    /* 绘制填充矩形 */
    ctx.beginPath();
    ctx.fillStyle = '#ff6600';
    ctx.fillRect(250, 250, 80, 100);

    /* 绘制描边矩形 */
    ctx.beginPath();
    ctx.fillStyle = 'green';
    ctx.fillRect(320, 120, 120, 100);

    /* 绘制填充的矩形，带有边框 */
    // 移动坐标参考点
    ctx.translate(10, 10);
    ctx.lineWidth = 5;
    ctx.fillStyle = '#ff6600';
    ctx.strokeStyle = 'green';
    // 定义绘制路径
    ctx.rect(0, 0, 80, 100);
    ctx.stroke();
    ctx.fill();

    // 清除指定区域
    ctx.clearRect(10, 10, 50, 60);
}
