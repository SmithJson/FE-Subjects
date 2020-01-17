/*
 * @Author: zhangl
 * @Date: 2020-01-17 16:03:33
 * @GitHub: https://github.com/SmithJson
 * @LastEditors  : zhangl
 * @LastEditTime : 2020-01-17 22:03:29
 * @Description: webpack development config
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
    mode: 'development',
    output: {
        path: PATHS.DIST,
        filename: 'assets/javascript/[name].js',
        publicPath: '/'
    },
    devServer: {
        contentBase: PATHS.DIST,
        hot: true,
        historyApiFallback: true,
        host: '0.0.0.0',
        port: 12306,
        proxy: {
            '/api': 'http://localhost:3000',
        },
        open: true,
        useLocalIp: true, // 使用本机 IP
    },
});