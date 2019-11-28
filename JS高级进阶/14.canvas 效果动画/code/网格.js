var canvas = document.getElementById('canvas'),
    width = canvas.width,
    height = canvas.height;

if (canvas.getContext) {
    var ctx = canvas.getContext('2d'),
        septX = 10,
        septY = 10,
        i = septY + 0.5,
        j = septY + 0.5;

    function grid(septX, septY) {
        grid.xAxis(septX);
        grid.yAxis(septY);
    }

    grid.xAxis = function (x) {
        for (; i < width; i += x) {
            ctx.beginPath();
            ctx.moveTo(i, 0);
            ctx.lineTo(i, height);
            ctx.lineWidth = '0.5';
            ctx.strokeStyle = 'green';
            ctx.stroke();
        }
    };
    grid.yAxis = function (y) {
        for (; j < height; j += y) {
            ctx.beginPath();
            ctx.moveTo(0, j);
            ctx.lineTo(width, j);
            ctx.lineWidth = '0.5';
            ctx.strokeStyle = 'green';
            ctx.stroke();
        }
    };

    grid(septX, septY);
}