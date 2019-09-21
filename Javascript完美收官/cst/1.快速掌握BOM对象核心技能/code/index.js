/*
 * @Author: zhangl
 * @Date: 2019-09-19 23:32:39
 * @LastEditors: zhangl
 * @LastEditTime: 2019-09-20 08:26:08
 * @Description: 快速掌握BOM对象核心技能
 */

// 模拟图片懒加载
function check(_id) {
    var demo = document.getElementById(_id);

    if (demo.offsetTop <= (window.pageYOffset + window.innerHeight)) { // 对象已出现在可视区屏幕上
        demo.time = setInterval(function () {
            if (parseInt(demo.style.opacity) >= 1) {
                clearInterval(demo.time);
            } else {
                demo.style.opacity = parseFloat(demo.style.opacity) + 0.01;
            }
        }, 60);
    }
}

window.onscroll = function () {
    check('demo');
};

// open：url，name，feature
// var newWindow = window.open('http://www.baidu.com', 'zhangl', 'width=300, height=300');
// var newWindow = window.open('https://www.baidu.com', 'width=300, height=300');

// cookieEnabled
console.log(navigator.cookieEnabled);