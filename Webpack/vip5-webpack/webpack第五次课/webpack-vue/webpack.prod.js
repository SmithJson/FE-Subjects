const webpack = require('webpack'); 
const path = require('path'); 
const merge = require('webpack-merge');
const MiniCssExtractPlugin= require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const DIST_PATH = path.resolve(__dirname, './dist/'); 
const commonConfig = require('./webpack.common.js'); 
module.exports = merge(commonConfig, { 
        // 设置Webpack的mode模式 
    mode: 'production',
    optimization: {
        minimize: true,
        minimizer: [
        //   new TerserPlugin({
        //     cache: true, // 是否缓存
        //     parallel: 4 // 是否并行打包,多线程 // parallel: 4,
        //   }),
          new OptimizeCSSAssetsPlugin({})
        ],
        //帮我们自动做代码分割    
      splitChunks:{    
        minChunks: 4,//打包生成的chunk文件最少有几个chunk引用了这个模块      
        chunks:"all",//默认是支持异步，我们使用all 
        //chunks:"async",//默认是支持异
        automaticNameDelimiter: '-',    
        name: true,      
        cacheGroups: {        
          vendors: {          
            test: /[\\/]node_modules[\\/]/,          
            priority: -10//优先级 数字越大，优先级越高 
          },        
          default: {          
            minChunks: 2,          
            priority: -20,          
            reuseExistingChunk: true       
          }     
        }  
        }
      },
    // 编译输出的JS入路径 
    // 告诉Webpack在哪里输出它所创建的bundle，以及如何命名这些文件 
    output: { 
        filename: 'js/[name].[chunkhash:8].js', // 创建的bundle的名称
     }, 
      // 模块解析 
     module:{
        rules:[
            { 
                test: /\.less$/, 
                exclude: /node_modules/,
                use: [
                  { loader: MiniCssExtractPlugin.loader,options:{
                       // 公共路径
                    // 默认情况下，使用的是webpackOptions.output中publicPath
                    // publicPath: '../',
                    //开发环境配置热更新
                    // hmr: process.env.NODE_ENV === 'development'
                  }}, 
                  { loader: "css-loader" }, 
                  { loader: 'postcss-loader'},
                  { loader: "less-loader" } ]   //方式一
                },
        ]
     },

    plugins: [ 
        new MiniCssExtractPlugin({
            filename:'styles/[name].[contenthash:8].css',
            chunkFilename:'styles/[id].[contenthash:8].css'
        })
    ]
})