# 更多的样式 {ignore=true}

[toc]

## 透明度

- opacity：设置整个元素的透明，它的取值是 0 ~ 1

## 鼠标

- auto：浏览器自动设置
- pointer：手势
- url：设置鼠标为图片，支持.ico、.cur 格式

## 盒子隐藏

- display: none，不生成盒子
- visibility: hidden，生成盒子，只是从视觉上移除盒子，盒子仍然占据空间

## 背景图

- img 元素是属于 HTML 概念
- 背景图属于 CSS 的概念

1. 当图片属于网页内容时，必须使用 img 元素
2. 当图片属于网页的美化时，必须使用背景图

### 涉及的属性

1. background-image：设置背景图 
2. background-repeat：背景图重复
3. background-size：背景图尺寸

    预设值：contain、cover，类似于 object-fit
    数值或百分比

4. background-position：背景图位置

    预设值：left、right、top、bottom   
    数值
    
5. background-attachment：固定背景图

    fixed：背景图相对于视口固定
    
6. 简写 background

```css
background: url repeat position / size attachment color
```


