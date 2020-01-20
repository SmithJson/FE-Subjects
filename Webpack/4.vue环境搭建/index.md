# 搭建 vue 环境 {ignore=true}

[toc]

## webpack.ProvidePlugin

自动导入模块，并以全局变量的形式使用该模块对象

## 预拉取、预加载

Prefetch（预拉取）：在浏览器空闲时，加载带有 prefetch 标记的模块（适用于加载其他页面所需的模块）
Preload（预加载）：与其他模块并行下载带有 preload 标记的模块（适用于加载当前页面所需的模块）

```javascript
document.addEventListener('click', function () {
    // 预加载
    import(
        /* webpackPreload: true */
        './click'
        ).then(({ default: func }) => {
        func.apply(this);
    });
});
```

## 代码分割

抽离重复代码，避免单文件大小过大

## 动态链接库

将第三方模块抽离，以 script 方式引入，避免重复打包，减少打包时间

## 配置 vue 环境

### vue-loader

vue 文件编译

### vue-template-compiler

模板解析器，将 template 语法转换 render 函数

### router、route的区别

router：路由器对象，包含了路由push、replace等 API
route：路由对象，包含了当前路由所有的信息，例： path、params、hash、query等
