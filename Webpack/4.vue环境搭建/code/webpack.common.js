/*
 * @Author: zhangl
 * @Date: 2020-01-17 16:03:33
 * @GitHub: https://github.com/SmithJson
 * @LastEditors  : zhangl
 * @LastEditTime : 2020-01-21 00:49:17
 * @Description: webpack common config
 * @FilePath: /FE-Subjects/Webpack/2.loader使用/code/webpack.config.js
 */
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
// const glob = require('glob');
const htmlWebpackPlugin = require('html-webpack-plugin');
// webpack 4.x 版本需要导入 vue-loader 插件
const VueLoadPlugin = require('vue-loader/lib/plugin');
const webpack = require('webpack');

// 多页入口导入
/* const entryPaths = {};
const PATHS = {
    DIST: path.resolve(__dirname, 'dist'),
    SRC: path.resolve(__dirname, 'src'),
    PUBLIC: path.resolve(__dirname, 'public'),
};

const files = glob.sync(path.join(PATHS.SRC, 'assets/javascript/*.js'));

files.forEach(file => {
    const substr = file.match(/src\/assets\/javascript\/(\S*).js/)[1];

    entryPaths[substr] = file;
}); */

const env = process.env.scene;
const PATHS = {
    DIST: path.resolve(__dirname, 'dist'),
    SRC: path.resolve(__dirname, 'src'),
    PUBLIC: path.resolve(__dirname, 'public'),
};


module.exports = {
    entry: path.join(PATHS.SRC, 'main.js'),
    // entry: entryPaths,
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
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
                test: /\.(jpe?g|png|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        name: '[name]_[hash:8].[ext]',
                        outputPath: 'assets/images',
                        limit: 1, // 2MB
                    },
                },
            }
        ],
    },
    plugins: [
        new VueLoadPlugin(),
        new htmlWebpackPlugin({
            filename: path.join(PATHS.DIST, 'index.html'),
            template: path.join(PATHS.PUBLIC, 'index.html'),
            title: 'Test Page',
            favicon: path.join(PATHS.PUBLIC, 'favicon.ico'),
        }),
         // 生产文件里添加注释
        // new webpack.BannerPlugin({
        //     banner: '华农出手，生死难料'
        // }),
        new CopyWebpackPlugin([
            {
                from: PATHS.PUBLIC,
                to: path.join(PATHS.DIST, 'public'),
                ignore: [
                    '*.html',
                    '*.ico',
                ],
            },
        ]),
        new webpack.DefinePlugin({ // 定义全局变量
            senceParam: JSON.stringify(env),
        }),
        new webpack.ProvidePlugin({ // 将模块对象作为全局变量使用
            commonConfig: [
                path.join(PATHS.SRC, 'assets/javascript/config.js'),
                'default',
            ],
        })
    ],
    resolve: {
        extensions: [ // 省略文件后缀
            '.js',
            '.vue',
            '.json',
        ],
        alias: { // 设置别名
            '@': PATHS.SRC,
            src: PATHS.SRC,
            styles: path.join(PATHS.SRC, 'assets/styles'),
            images: path.join(PATHS.SRC, 'assets/images'),
        },
    },
};