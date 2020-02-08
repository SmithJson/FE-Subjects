var path = require("path");
var webpack = require("webpack");
module.exports = {
    // 要打包的模块的数组
    entry: {
        // 项目中用到的依赖库文件
      vendor: ['vue/dist/vue.esm.js','vue-router','vuex'],
      asset:['axios','echarts']
    },
    output:{
        path: path.join(__dirname, './static/dll'), // 打包后文件输出的位置
        // filename: '[name]-[chunkhash:7].dll.js',// vendor.dll.js中暴露出的全局变量名。
        filename: '[name].dll.js',
        library: '[name]_library' // 与webpack.DllPlugin中的`name: '[name]_library',`保持一致。
        /*
        存放相关的dll文件的全局变量名称，比如对于asset来说的话就是 asset_library, 在后面加 _library
        是为了防止全局变量冲突。
        */
    },
    plugins:[
        new webpack.DllPlugin({
            path: path.join(__dirname,'./static/dll/[name]-manifest.json'), ///* 生成manifest文件输出的位置和文件名称 */
            name: '[name]_library',  // *** 这里的名字必须与output.library一致 ***
            context: __dirname
        })
    ]


}