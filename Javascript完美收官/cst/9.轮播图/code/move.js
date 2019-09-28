/*
 * @Author: zhangl
 * @Date: 2019-09-28 23:36:25
 * @LastEditors: zhangl
 * @LastEditTime: 2019-09-28 23:37:17
 * @Description: 动画库
 */
function getStyle(dom, attr) {
    if (window.getComputedStyle) {
        return window.getComputedStyle(dom, null)[attr];
    } else {
        return dom.currentStyle[attr];
    }
}

function startMove(dom, attrObj, callback) {
    var iCur = null;
    var iSpeed = null;

    clearInterval(dom.timer);
    dom.timer = setInterval(function () {
        var isStop = true;

        for (var attr in attrObj) {
            if (attr == 'opacity') {
                iCur = parseFloat(getStyle(dom, attr)) * 100;
            } else {
                iCur = parseInt(getStyle(dom, attr));
            }
            iSpeed = (attrObj[attr] - iCur) / 7;
            iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
            if (attr == 'opacity') {
                dom.style.opacity = (iCur + iSpeed) / 100;
            } else {
                dom.style[attr] = iCur + iSpeed + 'px';
            }
            if (iCur != attrObj[attr]) {
                isStop = false;
            }
        }

        if (isStop) {
            clearInterval(dom.timer);
            typeof callback === 'function' && callback();
        }
    }, 30);
}