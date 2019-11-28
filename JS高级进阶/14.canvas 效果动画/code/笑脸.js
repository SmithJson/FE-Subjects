var canvas = document.getElementById('canvas'),
    PI = Math.PI;

if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.arc(75, 75, 50, 0, PI * 2, false);
    ctx.moveTo(65, 55);
    ctx.arc(55, 55, 10, 0, PI * 2, false);
    ctx.moveTo(105, 55);
    ctx.arc(95, 55, 10, 0, PI * 2, false);
    ctx.moveTo(110, 70);
    ctx.arc(75, 70, 35, 0, PI, false);
    ctx.stroke();
}