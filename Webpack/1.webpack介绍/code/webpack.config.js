/*
 * @Author: zhangl
 * @Date: 2020-01-14 20:57:04
 * @GitHub: https://github.com/SmithJson
 * @LastEditors  : zhangl
 * @LastEditTime : 2020-01-15 00:13:52
 * @Description: webpack config file
 * @FilePath: /FE-Subjects/Webpack/1.webpack介绍/code/webpack.config.js
 */
const path = require('path');
const glob = require('glob');

const DIST_PATH = path.resolve(__dirname, './dist');
const SRC_PATH = path.resolve(__dirname, './src');

// 入口文件对象
const entryPaths = {};
// 读取到的入口文件
const files = glob.sync(path.join(SRC_PATH, './*.js'));

files.forEach(file => {
    const substr = file.match(/src\/(\S*).js/)[1];

    entryPaths[substr] = file;
});

module.exports = {
    entry: entryPaths,
    output: {
        path: DIST_PATH,
        filename: "[name]_[chunkhash:8].js"
    },
    module: {},
    plugins: [],
    devServer: {
        contentBase: DIST_PATH, // 服务根目录
        hot: true, // 开启热更新
        host: "0.0.0.0", // 域名
        port: 8080, // 端口号
        historyApiFallback: true, // 404 时，返回 index.html 页面
        proxy: {
          // 请求地址代理
            "/api": "http://localhost:3000",
        },
    },
};