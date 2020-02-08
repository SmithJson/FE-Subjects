/*
 * @Author: zhangl
 * @Date: 2020-02-08 00:15:39
 * @GitHub: https://github.com/SmithJson
 * @LastEditors  : zhangl
 * @LastEditTime : 2020-02-08 00:32:08
 * @Description: Do not edit
 * @FilePath: /FE-Subjects/Webpack/5.webpack优化/my-loader/loader/replaceLoader.js
 */
const loaderUtils = require('loader-utils');

module.exports = function (source) {
    // 获取 options 参数
    // console.log(this.query);

    // 同步方式
    // 通过 loader-utils 获取 options 参数
    // const { name } = loaderUtils.getOptions(this);
    // return source.replace(/Hello/g, name);

    // 异步方式一
    // const { name } = loaderUtils.getOptions(this);
    // const result = source.replace(/Hello/g, name);
    // this.callback(null, result);

    // 异步方法二
    const callback = this.async();
    const { name } = loaderUtils.getOptions(this);
    const result = source.replace(/Hello/g, name);
    callback(null, result);
};