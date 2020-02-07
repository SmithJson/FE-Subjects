const path = require("path");
// const CopyrightWebpackPlugin = require("./plugins/copyright-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    main: "./index.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js"
  },
  //处理loader的路径问题
  resolveLoader: {    
    modules: ["node_modules", "./loader"]  
    }, 

  module: {
    rules: [
      {
        test: /\.js$/,
        //添加参数前
        // use: path.resolve(__dirname, "./loader/replaceLoader.js")  
        //添加参数，使用resolveLoader之前

    //     use:[
    //       {
    //         loader:path.resolve(__dirname, "./loader/replaceLoader.js"),
    //         options:{
    //           name: "你好吗"       
    //         }
    //       },
    //       {
    //         loader:path.resolve(__dirname, "./loader/replaceLoaderAsync.js"),
    //         options:{
    //           name: "中国"       
    //         }
    //       }
    //   ],
        //使用resolveLoader之后
      use: [          
        {            
          loader: "replaceLoader",            
          options: {              
            name: "你好吗"            
          }          
        },          
        {            
          loader: "replaceLoaderAsync",            
          options: {              
            name: "软谋课堂"            
          }          
        }        
        ] 
      }
    ]
  },
  plugins: [
  
  ]
};
