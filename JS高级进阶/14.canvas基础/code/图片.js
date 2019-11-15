var canvas = document.querySelector('#cvs');

if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    var img = new Image();

    img.src = '../code/img/pic.jpeg';
    img.onload = function () {
        // 绘制图片
        ctx.drawImage(img, 0, 0);
    };
    img.onerror = function () {

    };
}