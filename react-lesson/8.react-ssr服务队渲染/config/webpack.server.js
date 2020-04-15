/*
 * @Author: zhangl
 * @Date: 2020-04-14 23:14:51
 * @LastEditors: zhangl
 * @LastEditTime: 2020-04-15 00:44:37
 * @GitHub: https://github.com/SmithJson
 * @FilePath: /8.react-ssr服务队渲染/config/webpack.server.js
 * @Description: 服务端 webpack 配置
 */
const path = require('path');
const setIter2Badge = require('set-iterm2-badge');

const getAbsolutePathByRelativePath = relativePath => (
    path.join(__dirname, relativePath)
);

setIter2Badge('Server Webpack');

module.exports = {
    target: 'node',
    mode: 'development',
    entry: getAbsolutePathByRelativePath('../server/index.js'),
    output: {
        filename: 'bundle.js',
        path: getAbsolutePathByRelativePath('../build'),
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