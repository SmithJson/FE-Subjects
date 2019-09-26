# 弹性运动

当距离目标近时，F减小（加速度减小）；距离目标远时，F增大（加速度增大）

```javascript
// 弹性运动函数
function startMove(dom, target) {
    var iSpeed = 0; // 速度
    var a = 3; // 加速度
    var u =0.8; // 摩擦力（运动中的能量损耗）

    timer  = setInterval(function () {
        clearInterval(timer);
        // 加速度随着距离目标近减少；距离目标远增加
        a = (target - dom.offsetLeft) / 5;
        iSpeed += a;
        iSpeed *= u;
        if (Math.abs(iSpeed) < 1 && Math.abs(target - dom.offsetLeft) < 1) { // 当速度为0，并且当前位置到达目标位置时，运动停止
            clearInterval(timer);
            dom.style.left = target + 'px';
        } else {
            dom.style.left = dom.offsetLeft + iSpeed + 'px';
        }
    }, 30);
}
```