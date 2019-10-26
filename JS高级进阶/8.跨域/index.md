# 跨域 {ignore=true}

[toc]

## jsonp

原理: scr 属性不受跨域约束

前端 + 后端

缺点

- 支持 GET 请求
- 不安全

## cors

- Access-Control-Allow-Origin: * 允许访问的该资源的请求源
- Access-Control-Allow-Method: GET, ... 允许访问的请求方式
- Access-Control-Allow-Header: * 允许访问的请求头

后端

## websocket

onmessage: 获取数据
.send(data): 发送数据

## nginx

功能

1. 搭建本地服务
2. proxy代理
3. 负载均衡

## webpack

proxy 反向代理

## http-proxy


---

## 浅拷贝

只会复制目标对象的第一层原始数据属性, 引用数据属性采用直接赋值, 不会去递归复制

拷贝的对象复制的引用数据属性会相互影响

- for 循环
- Object.assign
- ....扩展运算符

## 深拷贝

- JSON.stringify
    + function 会丢失, 只能是单纯的数据对象
- 递归调用