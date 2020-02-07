/*
 * @Author: zhangl
 * @Date: 2020-01-20 22:04:00
 * @GitHub: https://github.com/SmithJson
 * @LastEditors  : zhangl
 * @LastEditTime : 2020-02-07 23:23:09
 * @Description: Do not edit
 * @FilePath: /FE-Subjects/Webpack/4.vue环境搭建/code/src/assets/javascript/click.js
 */
export default function click() {
    const h1 = document.createElement('h1');

    h1.innerText = 'Hello World!';
    h1.style.color = '#f46';
    document.body.append(h1);
}