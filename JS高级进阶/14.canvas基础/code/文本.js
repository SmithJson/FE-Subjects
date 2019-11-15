var canvas = document.querySelector('#cvs');

if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    // font textAlign textBaseline direction
    // fillText(textWidth, x, y, maxWidth：字的最大宽度，会出现字压缩)
    // strokeText(textWidth, x, y, maxWidth)

    ctx.font = '30px Arial';
    ctx.strokeText('Hello World!', 10, 50);
    ctx.fillText('Hello World!', 10, 100, 100);
}