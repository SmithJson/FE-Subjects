/*
 * @Author: zhangl
 * @Date: 2020-01-17 16:03:33
 * @GitHub: https://github.com/SmithJson
 * @LastEditors  : zhangl
 * @LastEditTime : 2020-01-18 00:05:50
 * @Description: webpack common config
 * @FilePath: /FE-Subjects/Webpack/2.loader使用/code/webpack.config.js
 */
const path = require('path');
const glob = require('glob');
const htmlWebpackPlugin = require('html-webpack-plugin');

const entryPaths = {};
const PATHS = {
    DIST: path.resolve(__dirname, 'dist'),
    SRC: path.resolve(__dirname, 'src'),
    PUBLIC: path.resolve(__dirname, 'public'),
};

const files = glob.sync(path.join(PATHS.SRC, '*.js'));

files.forEach(file => {
    const substr = file.match(/src\/(\S*).js/)[1];

    entryPaths[substr] = file;
});

module.exports = {
    entry: entryPaths,
    module: {
        rules: [
            {
                test: /.(jsx?)$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                ],
            }, {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            }, {
                test: /\.less$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'less-loader',
                ],
            }, {
                test: /\.(jpe?g|png|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        name: '[name]_[hash:8].[ext]',
                        outputPath: 'assets/images',
                        limit: 2048, // 2MB
                    },
                },
            }
        ],
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: path.join(PATHS.DIST, 'index.html'),
            template: path.join(PATHS.PUBLIC, 'index.html'),
            title: 'Test Page',
            favicon: path.join(PATHS.PUBLIC, 'favicon.ico'),
        }),
    ],
};