/*
 * @Author: zhangl
 * @Date: 2020-01-17 16:27:46
 * @GitHub: https://github.com/SmithJson
 * @LastEditors  : zhangl
 * @LastEditTime : 2020-01-19 00:45:18
 * @Description: Do not edit
 * @FilePath: /FE-Subjects/Webpack/2.loader使用/code/src/index.js
 */
const arr = [
    new Promise(() => {}),
    new Promise(() => {}),
];

arr.map(item => console.log(item));

const isCol = [11, 22].includes(11);

console.log(isCol, ENV);