const webpack = require('webpack'); 
const path = require('path'); 
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common.js'); 
const DIST_PATH = path.resolve(__dirname, './dist/'); 
console.log(DIST_PATH)
module.exports = merge(commonConfig, { 
    mode: 'development', 
    // 设置Webpack的mode模式 
    // 开发环境下需要的相关插件配置 
    // devtool:"cheap-module-eval-source-map",

    // 编译输出的JS入路径 
    // 告诉Webpack在哪里输出它所创建的bundle，以及如何命名这些文件 
    output: { 
        filename: 'js/[name].js', // 创建的bundle的名称
     }, 
      // 模块解析 
      module:{
        rules:[
            { 
                test: /\.less$/, 
                exclude: /node_modules/,
                use: [
                  { loader: "style-loader"}, 
                  { loader: "css-loader" }, 
                  { loader: 'postcss-loader'},
                  { loader: "less-loader" } ]   //方式一
                },
        ]
     },
    // plugins: [ ], 
     // 开发服务器 
     devServer: { 
        hot: true, // 热更新，无需手动刷新 
        contentBase: DIST_PATH,  //热启动文件所指向的文件路径
        host: '0.0.0.0', // host地址 
        port: 8083, // 服务器端口 
        historyApiFallback: true, // 该选项的作用所用404都连接到index.html 
        publicPath:'/', //默认设置
        proxy: { 
           "/api": "http://localhost:3000" 
        // 代理到后端的服务地址，会拦截所有以api开头的请求地址
         } ,
        useLocalIp: true ,
        // open:true,
        // noInfo:true
      }
})