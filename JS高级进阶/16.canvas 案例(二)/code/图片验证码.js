const canvas = document.getElementById('canvas'), // 目标画布
    block = document.getElementById('block'), // 拖拽块
    canvasCtx = canvas.getContext('2d'),
    blockCtx = block.getContext('2d'),
    img = new Image(),
    canvasWidth = canvas.width,
    canvasHeight = canvas.height;

// 拼图裁剪 = 整方形 + 上圆 + 右圆 + 左圆
const x = 150, // 裁剪开始点 X 轴坐标
    y = 50, // 裁剪开始点 Y 轴坐标
    r = 9, // 裁剪圆半径
    l = 42, // 裁剪方块大小
    PI = Math.PI,
    L = l + r * 2 + 3;

img.onload = function () {
    canvasCtx.drawImage(img, 0, 0, canvasWidth, canvasHeight);
    blockCtx.drawImage(img, 0, 0, canvasWidth, canvasHeight);
    const y1 = y - r * 2 - 1;
    const ImageData = blockCtx.getImageData(x - 3, y1, L, L);
    block.width = L;
    blockCtx.putImageData(ImageData, 0, y1);
};
img.src = './img/2.jpg';

const draw = (ctx, x, y, operation) => {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.arc(x + l / 2, y - r + 2, r, 0.72 * PI, 2.26 * PI);
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
    ctx[operation]();
    ctx.globalCompositeOperation = 'destination-over';
};

draw(canvasCtx, x, y, 'fill');
draw(blockCtx, x, y, 'clip');