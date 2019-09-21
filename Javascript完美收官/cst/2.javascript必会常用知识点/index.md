# javascript必会常用知识点

## 浏览器基本组成

1. 用户界面
2. 浏览器引擎
3. 渲染引擎
4. 网络
5. UI后端
6. JS引擎
7. 数据存储

### 页面展示过程

![render](/assets/render.png)

## 渲染引擎-渲染模式

渲染：在电脑绘图中是指用软件从模型生成图像的过程

渲染引擎：其职责就是渲染，即在浏览器窗口显示所请求的内容

过程：解析html从而构建DOM树 --> CSS Rule树 --> 构建Render树 --> 布局Render树 --> 绘制Render树

## 三种标准模式的写法

1. ```<!DOCTYPE html>```
2. ```<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">```
3. ```<!DOCTYPE html PUBLIC "-//W3C/DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">```

向前兼容网页，向后兼容浏览器

document.compatMode：获取浏览器渲染模式

## Label标签

与表单元素绑定，获取焦点

label的点击事件会，同时出发表单元素事件

## 属性和特性

属性：包含特性 data，当对象的属性值修改时，元素上的属性值不会发生改变
特性：先天存在，与元素 一一 映射，当对象的特性值修改时，元素上的特性值也会修改（type、value、id、class）