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

### Window：表示浏览器窗口对象
+ innerHeight：返回当前文档显示区的高度
+ innerWidth：返回当前文档显示区的宽度
+ pageXOffset：设置或返回当前页面相对于窗口显示区域左上角X位置（X轴卷曲距离）
+ pageYOffset：设置或返回当前页面相对于窗口显示区域左上角Y位置（Y轴卷曲距离）
+ screenX：获取浏览器窗口距离屏幕最左侧距离
+ screenY：获取浏览器窗口距离屏幕最顶部距离
+ parent：获取父窗口window对象
+ top：获取最顶级父窗口window对象
+ self：获取当前对象自己的window对象
+ name：设置窗口名字
+ alert：显示包含一段信息的弹框
+ confirm：显示包含一段信息的确认弹框
+ prompt：显示包含一段信息的输入弹框
+ onbeforeunload：离开网页时事件
+ open：打开一个新窗口（地址：url，名字：name值描述：样式），并返回该窗口window对象
+ close：关闭使用open打开的窗口

### Navigator：包含客户端浏览器的信息
+ cookieEnabled：返回浏览器是否启用cookie
+ onLine：返回系统是否处于脱机模式
+ useAgent：返回浏览器详细信息

### History：包含浏览器窗口访问过的URL
+ length：返回浏览器历史列表中的数量
+ back：加载history列表中的前一个页面（左键）
+ forward：加载history列表中的后一个页面（右键）
+ go：加载history具体的某个页面

### Location：包含当前URL的信息
+ href：设置或获取当前网页url地址，刷新页面
+ search：设置或获取参数部分，刷新页面
+ hash：设置或获取hash部分，不刷新页面
+ assign：加载新文档
+ reload：重新加载文档
+ replace：替换当前文档

### Screen：包含客户端的显示屏信息
+ width：返回显示屏的宽度
+ height：返回显示屏的高度

![Picture1](/assets/Picture1.png)

## 单页面应用基本原理

1. 根据锚点的信息来选择对应要展示的内容
2. 切换内容时，将修改映射到锚点之中
3. 检测锚地修改，修改以后再映射内容