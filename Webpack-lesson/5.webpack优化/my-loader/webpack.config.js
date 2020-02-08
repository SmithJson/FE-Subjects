/*
 * @Author: zhangl
 * @Date: 2020-02-08 00:08:42
 * @GitHub: https://github.com/SmithJson
 * @LastEditors  : zhangl
 * @LastEditTime : 2020-02-08 00:35:03
 * @Description: Do not edit
 * @FilePath: /FE-Subjects/Webpack/5.webpack优化/my-loader/webpack.config.js
 */
const path = require('path');

module.exports = {
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
    },
    resolveLoader: {
        modules: ["node_modules", "./loader"]
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'replaceLoader',
                        options: {
                            name: '你好',
                        },
                    },
                    {
                        loader: 'replaceLoaderA',
                        options: {
                            name: '世界',
                        },
                    },
                ]
            },
        ],
    },
};