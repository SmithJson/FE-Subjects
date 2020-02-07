/*
 * @Author: zhangl
 * @Date: 2020-01-17 16:44:14
 * @GitHub: https://github.com/SmithJson
 * @LastEditors  : zhangl
 * @LastEditTime : 2020-01-20 22:19:00
 * @Description: Do not edit
 * @FilePath: /FE-Subjects/Webpack/2.loader使用/code/src/test.js
 */
import 'styles/index.css';
import 'styles/main.less';
import 'images/AB.png';

document.addEventListener('click', function () {
    import(
        './click'
        /* webpackPrefetch: true */
        ).then(({ default: func }) => {
        func.apply(this);
    });
});