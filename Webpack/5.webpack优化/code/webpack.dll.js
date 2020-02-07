/*
 * @Author: zhangl
 * @Date: 2020-02-07 19:59:25
 * @GitHub: https://github.com/SmithJson
 * @LastEditors  : zhangl
 * @LastEditTime : 2020-02-07 21:39:33
 * @Description: webpack dll 配置文件
 * @FilePath: /FE-Subjects/Webpack/5.webpack优化/code/webpack.dll.js
 */
const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        vue: [
            'vue/dist/vue.esm.js',
            'vue-router',
        ],
        assets: [
            'axios',
            'echarts',
        ],
    },
    output: {
        path: path.join(__dirname, 'public/dll'),
        filename: '[name].dll.js',
        library: '[name]_library', // 与 DllPlugin 的 name 一样
    },
    plugins: [
        // 生成 manifest.json 文件
        new webpack.DllPlugin({
            path: path.join(__dirname, 'public/dll/[name]-manifest.json'),
            name: '[name]_library',
            context: __dirname,
        }),
    ],
};