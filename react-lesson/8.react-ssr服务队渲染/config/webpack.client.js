/*
 * @Author: zhangl
 * @Date: 2020-04-14 23:15:01
 * @LastEditors: zhangl
 * @LastEditTime: 2020-04-15 02:15:28
 * @GitHub: https://github.com/SmithJson
 * @FilePath: /8.react-ssr服务队渲染/config/webpack.client.js
 * @Description: 客户端 webpack 配置
 */
const path = require('path');
const setIter2Badge = require('set-iterm2-badge');

const getAbsolutePathByRelativePath = relativePath => (
    path.join(__dirname, relativePath)
);

setIter2Badge('Client Webpack');

module.exports = {
    target: 'node',
    mode: 'development',
    entry: getAbsolutePathByRelativePath('../client/index.js'),
    output: {
        filename: 'main.js',
        path: getAbsolutePathByRelativePath('../public'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_module/,
                options: {
                    presets: [
                        '@babel/preset-env',
                        '@babel/preset-react',
                    ],
                },
            }
        ],
    },
};