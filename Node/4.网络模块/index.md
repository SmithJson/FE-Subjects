# 网络模块 {ignore=true}

[toc]

## http协议

超文本传输协议假定其下层协议提供可靠的传输，因此，任何能够提供这种的协议都可以被使用。因此也就使用TCP作为其传输层

## http请求的结构

1. 请求行：请求方式 请求路径 协议版本号
2. 请求头
3. 空行
4. 请求主体：请求的内容

## http响应结构

1. 响应行：协议版本号 状态码 响应文本
2. 响应头
3. 空行
4. 响应主体：响应的的内容

## http特点

- 无连接
- 无状态
- HTTP可以传输任何类型的数据

## 服务端API

- http.createServer([requestListener])：创建http服务实例
- http.incomingMessage
- http.ServerResponse

## 重要的数据和方法

- req.header：请求头
- req.url：请求路径
- req.method：请求方式
- req.httpVersion：http协议的版本
- res.end([data][, encoding][, callback])：用于声明整个请求已经发送完毕，每个响应必须调用一次
- res.write(chunk[, encoding][, callback])：用于往响应主体汇总写入数据
- res.statusCode：可操作响应码
- res.statusMessage：可操作响应状态信息
- res.setHeader()：可操作响应头
- res.writeHead(statusCode[, statusMessage][, callback])