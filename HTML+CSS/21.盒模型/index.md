# 盒模型 {ignore=true}

[toc]

box：盒子，每个元素在页面中都会生成一个矩形区域（盒子）

盒子类型：

1. 行盒，display等于inline的元素
2. 块盒，display等于block的元素

行盒在页面中不换行、块盒独占一行

浏览器默认样式表设置的快喝：容器元素、h1 ~ h6、div

常见的行盒：span、a、img、video

## 盒子的组成部分

无论行盒、还是块盒，都由下面几个部分组成，从内到外分别是：

1. 内容 content

width、height：设置盒子内容宽高

内容部分通常叫做整个盒子的**内容盒**

2. 填充(内边距) padding

盒子边框到盒子内容的距离

padding-left、padding-right、padding-top、padding-bottom

padding：简写属性

padding：上 右 下 左（顺时针方向）

填充区 + 内容区 = **填充盒**

3. 边框 border

边框 = 边框样式 + 边框宽度 + 边框颜色

border-style
border-width
border-color

边框 + 填充区 + 内容区 = "边框盒 border-box"

4. 外边距 margin

边框到其他盒子的距离

margin-left、margin-right、margin-top、margin-bottom