const bgCanvas = document.getElementById('verification_bg'),
    blockCanvas = document.getElementById('verification_block'),
    img = new Image();

if (!bgCanvas.getContext) {
    throw new TypeError('当前浏览器不支持canvas对象, 请更新浏览器版本');
}

// 拼图对象
const puzzleInfoObj = {
    x: 150, // 拼图开始 X 轴
    y: 50, // 拼图开始 Y 轴
    l: 42, // 拼图大小
    r: 9, // 拼图突出圆半径
    L: 42 + 9 * 2 + 3,
    PI: Math.PI,
};

const bgCtx = bgCanvas.getContext('2d'),
    blockCtx = blockCanvas.getContext('2d'),
    canvasWidth = bgCanvas.width,
    canvasHeight = bgCanvas.height;

const drawImage = (ctx, operation, { x, y, l, r, PI }) => {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.arc(x + l / 2, y - r + 2, r, 0.72 * PI, 0.78 * PI, 2.26 * PI);
    ctx.lineTo(x + l, y);
    ctx.arc(x + l + r - 2, y + l / 2, r, 1.21 * PI, 2.78 * PI);
    ctx.lineTo(x + l, y + l);
    ctx.lineTo(x, y + l);
    ctx.arc(x + r - 2, y + l / 2, r + 0.4, 2.76 * PI, 1.24 * PI, true);
    ctx.lineTo(x, y);
    ctx.lineWidth = 2;
    ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.7)';
    ctx.stroke();
    ctx.globalCompositeOperation = 'destination-over';
    ctx[operation]();
};

img.src = './img/1.jpg';
img.onload = function () {
    const {
        x,
        y,
        L,
        r,
    } = puzzleInfoObj;

    // 画布切割
    drawImage(bgCtx, 'fill', puzzleInfoObj);
    drawImage(blockCtx, 'clip', puzzleInfoObj);
    // 图片绘制
    bgCtx.drawImage(img, 0, 0, canvasWidth, canvasHeight);
    blockCtx.drawImage(img, 0, 0, canvasWidth, canvasHeight);

    // 图片信息提取
    const Y = y - r * 2 - 1; // 提取顶部圆圈
    const imgData = blockCtx.getImageData(x - 3, Y, L, L);

    console.log(imgData);

    // 图形复制
    blockCanvas.width = L;
    // 图片信息粘贴
    blockCtx.putImageData(imgData, 0, Y);
};
