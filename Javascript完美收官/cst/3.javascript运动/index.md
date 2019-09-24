# JavaScript运动

## 匀速运动

速度不变的运动

```javascript
var demo = document.getElementsByClassName('demo')[0];
var btn = document.getElementsByTagName('button')[0];
var timer = null;

btn.onclick = function () {
    moveStart(demo, 300);
};

function moveStart(dom, target) {
    var iSpeed = 300 - demo.offsetLeft > 0 ? 7 : -7;

    clearInterval(timer);
    timer = setInterval(function () {
        if (Math.abs(target - dom.offsetLeft) < Math.abs(iSpeed)) { // 距离目标距离 < 每次运动的步数 iSpeed(下一次就能超过目标距离)
            clearInterval(timer);
            dom.style.left = target + 'px';
        } else { // 正常运动
            dom.style.left = dom.offsetLeft + iSpeed + 'px';
        }
    }, 30);
}
```

## 缓冲运动

速度随着距离目标点的距离，越来越小

```javascript
function moveStart(dom, target) {
    var iSpeed = null;

    clearInterval(timer);
    timer = setInterval(function () {
        var distance = (target - dom.offsetLeft) / 7;

        iSpeed = distance < 0 ? Math.floor(distance) : Math.ceil(distance);
        if (dom.offsetLeft === target) {
            clearInterval(timer);
        } else {
            dom.style.left = dom.offsetLeft + iSpeed + 'px';
        }
    }, 30);
}
```

## 多物体多值运动 + 回调机制

```javascript
```