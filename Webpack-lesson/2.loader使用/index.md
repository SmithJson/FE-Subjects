# loader 使用 {ignore=true}

[toc]

## loader

由于 webpack 只能处理 js 文件，所有需要使用其他 loader 来处理其他类型的文件

## style-loader

以 style 标签的形式将编译好的 css 内容插入 html 文件

## css-loader

处理 CSS 文件，编译 css

## post-css

将 css 转换为 css AST，将 css AST 提供给 post-css 周边的插件处理

### autoprefixer

自动添加厂商前缀

### postcss-pxtorem

将 px 转换为 rem

## less-loader

处理 less 文件，将 less 语法编译为 css 语法

## file-loader

将正则匹配的文件提取出来

## url-loader

与 file-loader 功能相同，但可以将 size 小于特定值的文件转换为 base64 格式

## babel

由于 webpack 默认只能转换 js 语法，无法对 API 之类的东西进行转换，通过 babel 实现 API、Set 等的转换

### babel-loader

让 webpack 能使用 babel

## @babel/core

提供转换所需的 API

### @babel/preset-env

提供转换所需的规则

### @babel/polyfill

JS 低版本浏览器的解决方案

缺点：会将要兼容的对象绑定在全局对象上，造成全局变量和 JS 内置对象的污染

## @babel/plugin-transform-runtime

JS 低版本浏览器的解决方案，在闭包内声明兼容对象，克服了 babel-polyfill 的缺点

```bash
npm install @babel/plugin-transform-runtime --save-dev
npm install @babel/runtime --save
```

```json
// .babelrc
{
    "presets": [...],
    "plugins": [
        ["@babel/transform-runtime"]
    ],
}
```

## html-webpack-plugin

根据 html 模板生产 html 文件