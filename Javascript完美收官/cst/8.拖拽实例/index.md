# 拖拽实例

```javascript
var demo = document.getElementsByClassName('demo')[0];
var lastX = 0;
var lastY = 0;
var iSpeedX = 0;
var iSpeedX = 0;

demo.onmousedown = function (e) {
    var _self = this;
    var event = event || e;
    var disX = event.clientX - _self.offsetLeft; // 鼠标距离物体左边距离
    var disY = event.clientY - _self.offsetTop; // 鼠标距离物体顶部距离

    document.onmousemove = function (e) {
        clearInterval(_self.timer);
        var event = event || e;
        var newLeft = event.clientX - disX;
        var newTop = event.clientY - disY;

        iSpeedX = newLeft - lastX;
        iSpeedY = newTop - lastY;
        lastX = newLeft;
        lastY = newTop;
        _self.style.left = newLeft + 'px';
        _self.style.top = newTop + 'px';
    }
    document.onmouseup = function () {
        document.onmouseup = null;
        document.onmousemove = null;
        startMove(_self, iSpeedX, iSpeedY);
    };
};

function startMove(dom, iSpeedX, iSpeedY) {
    clearInterval(dom.timer); // 清除上一定时器
    var g = 9.8; // 重力加速度
    var u = 0.8; // 能量损耗

    dom.timer = setInterval(function () {
        iSpeedY += g;
        var newLeft = dom.offsetLeft + iSpeedX;
        var newTop = dom.offsetTop + iSpeedY;
        var MAX_TOP = document.documentElement.clientHeight - dom.clientHeight;
        var MAX_LEFT = document.documentElement.clientWidth - dom.clientWidth;
        var MIN_TOP = 0, MIN_LEFT = 0;

        // 对空间临界值判断
        if (newTop >= MAX_TOP) {
            iSpeedY *= -1;
            iSpeedX *= u;
            iSpeedY *= u;
            newTop = MAX_TOP;
        }
        if (newTop <= MIN_TOP) {
            iSpeedY *= -1;
            iSpeedX *= u;
            iSpeedY *= u;
            newTop = MIN_TOP;
        }
        if (newLeft >= MAX_LEFT) {
            iSpeedX *= -1;
            iSpeedX *= u;
            iSpeedY *= u;
            newLeft = MAX_LEFT;
        }
        if (newLeft <= MIN_LEFT) {
            iSpeedX *= -1;
            iSpeedX *= u;
            iSpeedY *= u;
            newLeft = MIN_LEFT;
        }
        if (Math.abs(iSpeedX) < 1) {
            iSpeedX = 0;
        }
        if (Math.abs(iSpeedY) < 1) {
            iSpeedY = 0;
        }
        if (iSpeedX === 0 && iSpeedY === 0 && newTop === MAX_TOP) { // 速度为0，并且物体落地，说明此时是静止状态
            clearInterval(dom.timer);
        } else { // 运动中
            dom.style.left = newLeft + 'px';
            dom.style.top = newTop + 'px';
        }
    }, 30);
}
```