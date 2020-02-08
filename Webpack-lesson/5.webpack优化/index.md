# webpack optimization {ignore=true}

[toc]

## webpack dll VS external

使用 dll 原因：将版本更新不频繁的第三方模块提取出来，以 script 形式引入，不对这个提取模块打包，加速构建速度

## DllPlugin

抽离第三方模块，生成一个 dll 文件，同时生成一个该模块的索引文件 manifest.json

```javascript
  new webpack.DllPlugin({
    path: path.join(__dirname, 'public/dll/[name]-manifest.json'),
    name: '[name]_library',
    context: __dirname,
}),
```

## DllReferencePlugin

webpack 根据 manifest.json 文件，读取预编译所需的模块内容，减少重复编译

```javascript
new webpack.DllReferencePlugin({
    context: __dirname,
    manifest: path.resolve(__dirname, 'public/dll/assets-manifest.json'),
}),
new webpack.DllReferencePlugin({
    context: __dirname,
    manifest: path.resolve(__dirname, 'public/dll/vue-manifest.json'),
}),
```

## html-webpack-include-assets-plugin

向 html 中添加 js 和 css

```javascript
new htmlIncludeAssetsPlugin({
    assets: [
        'public/dll/assets.dll.js',
        'public/dll/vue.dll.js',
    ],
    append: false,
}),
```

## 使用 happypack 提升 Webpack 项目构建速度

多线程进行 webpack 打包，happypack 对 url-loader、file-loader 不友好，建议在项目较大时使用

```javascript
new Happypack({
    id: 'happyBabel', // happypack 线程任务 id
    // 与普通 laoder 使用方法一致
    loaders: [{
        loader: 'babel-loader/loader?cacheDirectory=true',
    }],
    threadPool: happyThreadPool, // 多线程共用的线程池
    verbose: true, // 打印日志
}),
```

## 编写 Loader 和 Plugin

