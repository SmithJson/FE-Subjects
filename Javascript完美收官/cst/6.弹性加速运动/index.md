# 弹性加速运动

```javascript
var timer = null;
var eleArr = document.getElementsByClassName('ele');
var bg = document.getElementsByClassName('bg')[0];

for (var i = 0; i < eleArr.length; i++) {
    eleArr[i].onmouseenter = function () {
        startMove(bg, this.offsetLeft);
    };
}

// 加速运动
function startMove(dom, target) {
    var a = 3;
    var iSpeed = 0;
    var u = 0.8;

    clearInterval(timer);
    timer = setInterval(function () {
        a = (target - dom.offsetLeft) / 7;
        iSpeed += a;
        iSpeed *= u;
        if (Math.abs(iSpeed) < 1 && Math.abs(target - dom.offsetLeft) < 1) {
            clearInterval(timer);
            dom.style.left = target + 'px';
        } else {
            dom.style.left = dom.offsetLeft + iSpeed + 'px';
        }
    }, 30);
}
```