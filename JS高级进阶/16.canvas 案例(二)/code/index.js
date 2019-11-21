const canvas = document.querySelector('#cvs');

if (canvas.getContext) {
    const ctx = canvas.getContext('2d');

    drawImg('./img/mouse.webp');

    // 图像绘制
    function drawImg(src) {
        const img = new Image(),
            imgWidth = 50,
            imgHeight = 50;
        let offsetX = 50,
            offsetY = 50,
            isMoveLine = false;

        img.src = src;
        img.onload = function () {
            ctx.drawImage(img, offsetX, offsetY, imgWidth, imgHeight);
        };

        canvas.onmousedown = function (e) {
            let prevX = e.offsetX,
                prevY = e.offsetY,
                disX = prevX - offsetX,
                disY = prevY - offsetY;

            if (prevX <= offsetX || prevX >= offsetX + imgWidth) return false;
            if (prevY <= offsetY || prevY >= offsetY + imgHeight) return false;

            this.onmousemove = function (e) {
                let currentX = e.offsetX - disX,
                    currentY = e.offsetY - disY;

                if (currentX < 0 || currentX > canvas.width - imgWidth) return false;
                if (currentY < 0 || currentY > canvas.height - imgHeight) return false;

                offsetX = currentX;
                offsetY = currentY;
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(img, currentX, currentY, 50, 50);
            };
            this.onmouseup = function (e) {
                this.onmousemove = null;
                this.onmouseup = null;
            };
        };

        canvas.addEventListener('mousedown', function () {
            isMoveLine = true;
        });
        canvas.addEventListener('mousemove', function (e) {
            if (!isMoveLine) return false;

            ctx.fillStyle = 'red';
            ctx.beginPath();
            ctx.arc(e.offsetX, e.offsetY, 5, 0, 2 * Math.PI, true);
            ctx.fill();
        });
        canvas.addEventListener('mouseup', function () {
            isMoveLine = false;
        });
    }
}