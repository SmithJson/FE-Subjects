/*
 * @Author: zhangl
 * @Date: 2020-01-17 16:03:33
 * @GitHub: https://github.com/SmithJson
 * @LastEditors  : zhangl
 * @LastEditTime : 2020-01-20 23:40:23
 * @Description: webpack production config
 * @FilePath: /FE-Subjects/Webpack/2.loader使用/code/webpack.config.js
 */
const path = require('path');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const webpackMerge = require('webpack-merge');
const webpackCommonConfig = require('./webpack.common');

const PATHS = {
    DIST: path.resolve(__dirname, 'dist'),
    SRC: path.resolve(__dirname, 'src'),
    PUBLIC: path.resolve(__dirname, 'public'),
};

module.exports = webpackMerge(webpackCommonConfig, {
    devtool: 'cheap-module-source-map',
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.less$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../../',
                        },
                    },
                    'css-loader',
                    'postcss-loader',
                    'less-loader',
                ],
            },
        ],
    },
    output: {
        path: PATHS.DIST,
        filename: 'assets/javascript/[name].[chunkhash:8].js',
        publicPath: './',
    },
    optimization: {
        minimize: true,
        minimizer: [
            new OptimizeCssAssetsWebpackPlugin(),
            new TerserWebpackPlugin({
                parallel: 4, // 开启四个线程进行压缩
                cache: true,
            }),
        ],
        optimization: {
            // 代码分割
            splitChunks: {
                chunks: 'all', // all：全部、async：异步、initial：同步模块有效
                minSize: 30 * 1024, // 模块大于 30KB
                maxSize: 0, // 对模块进行二次分割时使用（不推荐）
                minChunks: 1, // 打包生成的 chunk 文件，最好有几个 chunk 使用了该模块
                maxAsyncRequests: 5, // 模块请求次数
                maxInitialRequests: 3, // 入口文件同步请求次数
                automaticNameDelimiter: '~',
                name: true,
                cacheGroups: {
                    vendors: {
                        test: /[\\/]node_modules[\\/]/,
                        priority: -10 // 优先级，数字越大，优先级越高
                    },
                    default: {
                        minChunks: 2,
                        priority: -20,
                        reuseExistingChunk: true
                    }
                },
            },
        },
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'assets/styles/[name].[contenthash:8].css',
            chunkFilename: 'assets/styles/[name].chunk_[contenthash:8].css',
        }),
    ],
});