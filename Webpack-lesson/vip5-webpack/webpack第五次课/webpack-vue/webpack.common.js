var webpack = require('webpack'); 
var htmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var TerserPlugin = require('terser-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');
// 引入 happypack
const HappyPack = require('happypack');

// 创建 happypack 共享进程池，其中包含 6 个子进程
const happyThreadPool = HappyPack.ThreadPool({ size: 6 });

var path = require('path'); 
var glob = require("glob");

var DIST_PATH = path.resolve(__dirname, './dist/'); 

console.log(process.env.scene);
//入口文件
var SRC_PATH = path.resolve(__dirname,'./src');
var newEntries = {};
// index:'./src/index.js',
// main:'./src/main.js'

// var files = glob.sync(path.join(SRC_PATH,'/*.js')); // 方式一
var files = glob.sync(SRC_PATH+'/js/*.js');  //方式二

files.forEach(function(file,index){
// var substr =  file.split('/').pop().split('.')[0];

// var substr = file.match(/src\/assets\/js\/(\S*)\.js/)[1]; //昨天的错误
 var substr = file.match(/src\/js\/(\S*)\.js/)[1];

   newEntries[substr] = file;
// [\s]---表示，只要出现空白就匹配；
// [\S]---表示，非空白就匹配；

})

// 声明/dist的路径 为成绝对路径
module.exports = { 
    // 入口JS路径 
    // 指示Webpack应该使用哪个模块，来作为构建其内部依赖图的开始 
    entry: path.resolve(__dirname,'./src/main.js'), 
    // 支持单文件，多文件打包
     // entry: './src/index.js',   //方式一
    //  entry: ['./src/index.js','./src/main.js'], //方法二
    // entry: {
    //     index:'./src/index.js',
    //     main:'./src/main.js'
    //  },
    // entry:newEntries,
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          cache: true, // 是否缓存
          parallel: 4 // 是否并行打包,多线程 // parallel: 4,
        }),
      ],
    },
   
    output: { 
        path: DIST_PATH // 创建的bundle生成到哪里
     }, 
     resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        '@':SRC_PATH,
        'src': SRC_PATH,
        'styles': SRC_PATH+'/assets/styles',
        'images':SRC_PATH+'/assets/images',
      }
    },
    // 模块解析 
    module: {
      rules:[
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        },
        { 
          test: /\.css$/, 
          exclude: /node_modules/,
          use: [{ loader: "style-loader"}, { loader: "css-loader" } ]   //方式一
          //use: ["style-loader", loader: "css-loader" ]  //方式二
         },
         
          {        
            test: /\.(png|jpe?g|gif)$/,        
            //use使⽤用⼀一个loader可以⽤用对象，字符串串，两个loader需要⽤用数组        
            use: {          
              loader: "url-loader",          
              // options额外的配置，比如资源名称          
              options: {            
                // placeholder 占位符  [name]⽼老老资源模块的名称            
                // [ext]⽼资源模块的后缀            
                // https://webpack.js.org/loaders/file-loader#placeholders            
                name: "[name]_[hash].[ext]",            
                //打包后的存放位置            
                outputPath: "images/" ,
                //小于2048B，才转换成base64 的文件打成Base64的格式，写入JS           
                limit: 2048 ,
                publicPath:'/images'  //最终生成的CSS代码中，图片URL前缀   	        
                }        
              }      
         } ,
         //babel 配置 
        { 
          test:/\.(jsx|js)$/, 
          //未使用happypack的方式
          // use:{ 
          //   loader:'babel-loader', 
          //   // options:{ 
          //   //   presets:[ "@babel/preset-env" ]  //方法一
          //   // } 
          // }, 
          //使用happypack打包
          //把对.js 的文件处理交给id为babeljs的HappyPack的实例执行
          use:'happypack/loader?id=babeljs',
          exclude:/node_modules/ 
        } 
      ]
     }, 
    // 插件
    plugins: [
       new VueLoaderPlugin(),
       new htmlWebpackPlugin({
            filename: path.resolve(DIST_PATH,'index.html'), //打包后的文件名
            title: '树鱼虚拟充值生态服务平台',  //打包后的页面title
            template: path.resolve(__dirname,'index.html'),  //打包的模板文件
            inject: true,
            hash: true,
            favicon: path.resolve(__dirname, 'favicon.ico')
       }),
      //  new webpack.BannerPlugin({      
      //     banner: '永远要记得，成功的决心远胜于任何东西'
      //   }),
      new CopyWebpackPlugin([{
          from: path.resolve(__dirname, './static'),
          to: DIST_PATH+'/static',
          ignore: ['.*']
        }]),
      new webpack.DefinePlugin({
        'sceneParam': JSON.stringify(process.env.scene),
        'laney':JSON.stringify('laney'),
        'test':'"kkkkk"'
      }),

      // plugins.push(new webpack.ProvidePlugin({
      //   // config:path.resolve(srcPath,'js/config.js')
      //   // config:'config'
      //   // config:['config','default'],
      //   configCommon:[path.resolve(srcPath,'js/config.js'),'default'],
      //   // $:'jquery',
      //   // jQuery:'jquery'
      // }));

      new webpack.ProvidePlugin({
        configCommon:[path.resolve(SRC_PATH,'js/config.js'),'default']
      }),

        // 添加DllReferencePlugin插件
        // vendor映射到json文件上去
        new webpack.DllReferencePlugin({
          context: __dirname,
          manifest: require('./static/dll/vendor-manifest.json')
        }),
        // asset映射到json文件上去
        new webpack.DllReferencePlugin({
          context: __dirname,
          manifest: require('./static/dll/asset-manifest.json')
        }),

        new HtmlWebpackIncludeAssetsPlugin({
          assets: ['static/dll/asset.dll.js','static/dll/vendor.dll.js'],
          append: false
        }),

        new HappyPack({
            //用id来标识 happypack处理那里类文件
          id:'babeljs',
          //如何处理js文件用法和loader 的配置一样
          loaders:[{
            loader:'babel-loader?cacheDirectory=true'
          }],
           //使用共享进程池中的自进程去处理任务
          threadPool:happyThreadPool,
          verbose:true  //允许 HappyPack 输出日志，默认为true
        })

     ], 
   
    }