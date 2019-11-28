var canvas = document.getElementById('canvas');

if (canvas.getContext) {
    var ctx = canvas.getContext('2d'),
        x = 0,
        y = 0,
        id = null,
        width = 100,
        height = 100;

    function drawRect() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillRect(x, y++, width, height);
        id = requestAnimationFrame(drawRect);

        if (y + height >= canvas.height) {
            console.log(id);
            cancelAnimationFrame(id);
        }
    }

    id = requestAnimationFrame(drawRect);
}