# 模拟重力场

多方向 + 碰撞检测 + 重力加速度 + 能力损失

```javascript
function startMove(dom) {
    var iSpeedX = 6;
    var iSpeedY = 9;
    var g = 3; // 重力加速度
    var u = 0.8; // 能量损耗

    clearInterval(timer);
    timer = setInterval(function () {
        iSpeedY += g;
        var newLeft = dom.offsetLeft + iSpeedX;
        var newTop = dom.offsetTop + iSpeedY;

        // 边界值判断
        if (newTop >= document.documentElement.clientHeight - dom.clientHeight) {
            iSpeedY *= -1;
            iSpeedY *= u;
            iSpeedX *= u;
            newTop = document.documentElement.clientHeight - dom.clientHeight;
        }

        if (newTop <= 0) {
            iSpeedY *= -1;
            iSpeedY *= u;
            iSpeedX *= u;
            newTop = 0;
        }

        if (newLeft >= document.documentElement.clientWidth - dom.clientWidth) {
            iSpeedX *= -1;
            iSpeedY *= u;
            iSpeedX *= u;
            newLeft = document.documentElement.clientWidth - dom.clientWidth;
        }

        if (newLeft <= 0) {
            iSpeedX *= -1;
            iSpeedY *= u;
            iSpeedX *= u;
            newLeft = 0;
        }

        if (Math.abs(iSpeedX) < 1) {
            iSpeedX = 0;
        }

        if (Math.abs(iSpeedY) < 1) {
            iSpeedY = 0;
        }

        if (iSpeedX === 0 && iSpeedY === 0 && newTop === document.documentElement.clientHeight - dom.clientHeight) {
            clearInterval(timer);
        } else {
            dom.style.left = newLeft + 'px';
            dom.style.top = newTop + 'px';
        }
    }, 30);
}
```