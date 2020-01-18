# plugins 使用 {ignore=true}

[toc]

## webpack.BannerPlugin

在生产的文件中添加注释

## copy-webpack-plugin

文件拷贝

## terser-webpack-plugin

JS 代码压缩

## mini-css-extract-plugin

提取 JS 中导入的 css 文件

## optimize-css-assets-webpack-plugin

CSS 代码压缩

## cross-env

在 process.env 对象上设置属性

```javascript
// package.json
"scripts": {
    "build": "cross-env scene=prod webpack --config ./webpack.prod.js",
}

// webpack.config.js
const env = process.env.scene; // env => 'prod'
```

## webpack.DefinePlugin

在编译时定义全局变量