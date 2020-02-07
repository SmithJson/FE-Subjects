/*
 * @Author: zhangl
 * @Date: 2020-02-08 00:33:01
 * @GitHub: https://github.com/SmithJson
 * @LastEditors  : zhangl
 * @LastEditTime : 2020-02-08 00:35:57
 * @Description: Do not edit
 * @FilePath: /FE-Subjects/Webpack/5.webpack优化/my-loader/loader/replaceLoaderA.js
 */
const loaderUtils = require('loader-utils');

module.exports = function (source) {
    const { name } = loaderUtils.getOptions(this);
    const callback = this.async();
    const result = source.replace(/World/g, name);
    callback(null, result);
};
