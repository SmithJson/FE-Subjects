# 快速掌握BOM对象核心技能

## 什么是DOM？
DOM是`document object mode`的缩写，简称`文档对象模型`
主要提供一套接口让js操作dom元素

## 什么是BOM？

BOM是`browser object mode`的缩写，简称`浏览器对象模型`
主要提供一套接口让js操作浏览器窗口（window）和框架（iframe）

## BOM核心-window

window对象是BOM的顶层对象

### 担任角色

- js访问浏览器窗口的一个接口
- 一个全局对象

## BOM和DOM的关系

JavaScript语法的标准化组织是ECMA

DOM的标准组织是W3C

BOM没有标准的组织，所以对浏览器兼容性不是很好

## BOM的组成

- Window：表示浏览器窗口对象
    + innerHeight：返回当前文档显示区的高度
    + innerWidth：返回当前文档显示区的宽度
    + pageXOffset：设置或返回当前页面相对于窗口显示区域左上角X位置（X轴卷曲距离）
    + pageYOffset：设置或返回当前页面相对于窗口显示区域左上角Y位置（Y轴卷曲距离）
- Navigator：包含客户端浏览器的信息
- History：包含浏览器窗口访问过的URL
- Location：包含当前URL的信息
- Screen：包含客户端的显示屏信息

![Picture1](/assets/Picture1.png)