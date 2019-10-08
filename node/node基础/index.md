# node基础 {ignore=true}

[toc]

## 什么是NodeJs？

基于V8引擎的JavaScript运行环境

## 下载Nodejs

[官网下载](https://nodejs.org/zh-cn/)

使用`node --version`查看是否安装成功

## node模块系统

nodejs的模块系统是基于CommonJs规范（同步加载，同一模块只加载一次）

## 语法

- module.export：导出
- require：导入

## module.exports和exports的区别

- 模块最终导出module.exports的区别
- exports相对于指向module.exports的引用
- module.exports能重新赋值，但exports不能重新赋值

```javascript
var module.exports = {};
var exports = module.exports;
return module.exports;
```

## npm版本

- 指定版本：比如1.2.2，遵循`大版本.次要版本.小版本`的格式规定，安装时只安装指定版本
- 波浪线 + 指定版本：比如 ~1.2.2，表示安装1.2.x的最新版本（不低于1.2.2），但是不安装1.3.x，也就是说安装时不改变大版本号和次要版本号
- 插入号 + 指定版本：比如 ^1.2.2，表示安装1.x.x的最新版本，但是不安装2.x.x，也就是说安装时不改变大版本号（需要注意：如果大版本号为0，则插入和波浪号行为相同）
- latest：安装最新版本

## NodeJs模块

- 原生模块：原生模块在nodejs源代码编译的时候编译进了二进制执行文件，加载速度最快
- 文件模块：文件模块动态加载，加载的速度比原生模块慢，但是nodejs都对原生模块和文件模块进行缓存，于是第二册require时，是不会有重复开销的