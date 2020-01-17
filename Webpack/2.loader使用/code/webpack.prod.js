/*
 * @Author: zhangl
 * @Date: 2020-01-17 16:03:33
 * @GitHub: https://github.com/SmithJson
 * @LastEditors  : zhangl
 * @LastEditTime : 2020-01-17 21:51:15
 * @Description: webpack production config
 * @FilePath: /FE-Subjects/Webpack/2.loader使用/code/webpack.config.js
 */
const path = require('path');
const webpackMerge = require('webpack-merge');
const webpackCommonConfig = require('./webpack.common');

const PATHS = {
    DIST: path.resolve(__dirname, 'dist'),
    SRC: path.resolve(__dirname, 'src'),
    PUBLIC: path.resolve(__dirname, 'public'),
};

module.exports = webpackMerge(webpackCommonConfig, {
    mode: 'production',
    output: {
        path: PATHS.DIST,
        filename: 'assets/javascript/[name].[chunkhash:8].js',
    },
});