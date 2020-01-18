/*
 * @Author: zhangl
 * @Date: 2020-01-17 16:03:33
 * @GitHub: https://github.com/SmithJson
 * @LastEditors  : zhangl
 * @LastEditTime : 2020-01-18 23:55:01
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
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'assets/styles/[name].[contenthash:8].css',
            chunkFilename: 'assets/styles/[name].chunk_[contenthash:8].css',
        }),
    ],
});