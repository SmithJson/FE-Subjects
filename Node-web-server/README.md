# Node 学习 {ignore=true}

[toc]

## ECMAScript、JavaScript、Nodejs

- ECMAScript：语法规范
- JavaScript: JS 语法 + web Api
- Nodejs：JS 语法 + node Api

## server 开发和前端开发的区别

- 服务稳定性（PM2做进程守候）
- 考虑内存和 CPU（stream 写日志，使用 redis 存 session）
- 日志记录（重要）
- 安全
- 集群和服务拆分

## get 请求

get 请求即客户端向服务端获取数据，如查询列表

通过 queryString 传递数据，如 index.html?name=zhangl

```javascript
const http = require('http');
const querystring = require('querystring');

const server = http.createServer((req, res) => {
    console.log('method：', req.method);
    console.log('url：', decodeURIComponent(req.url));
    res.query = querystring.parse(req.url.split('?')[1]);
    res.setHeader('Content-Type', 'application/json;charset=utf-8');
    res.end(JSON.stringify(res.query));
});

server.listen(3000, () => console.log('OK'));
```

## post 请求

```javascript
const http = require('http');
const querystring = require('querystring');

const server = http.createServer((req, res) => {
    const { method, headers } = req;
    let postData = '';

    if (method === 'POST') {
        // 接受数据
        req.on('data', chunk => {
            console.log('Content-Type', headers['content-type']);
            console.log('chunk：', chunk);
            postData += chunk.toString();
        });

        // 数据接受完毕
        req.on('end', () => {
            console.log('postData：', postData);
            res.setHeader('Content-Type', 'application/json;charset=utf-8');
            res.end(JSON.stringify(postData));
        });
    }
});

server.listen(3000, () => console.log('OK'));
```

## post、get综合

```javascript
const http = require('http');
const querystring = require('querystring');

const server = http.createServer((req, res) => {
    const {
        method,
        url,
    } = req;
    const newUrl = decodeURIComponent(url);
    const path = newUrl.split('?')[0];
    const query = querystring.parse(newUrl.split('?')[1]);
    const data = {
        method,
        path,
        query,
        url: newUrl,
    };

    res.setHeader('Content-Type', 'application/json;charset=utf-8');

    if (method === 'GET') {
        res.end(JSON.stringify(data));

        return;
    };

    if (method === 'POST') {
        let postData = '';

        req.on('data', chunk => postData += chunk.toString());
        req.on('end', () => {
            data.postData = postData;
            res.end(JSON.stringify(data));
        });

        return;
    }
});

server.listen(3000, () => console.log('OK'));
```

## 抽离代码

- bin：创建 http 服务
- app.js：对请求服务的集中处理
- router：路由代码管理
- model：返回数据模型
- controller：处理需要返回数据

## cookie

存储在浏览器的一段字符串（最大为 5KB）

- 跨域不共享
- 每次发送 http 请求，会将请求域的 cookie 一起发送给 server
- server 可以修改 cookie 并发送给服务器
- 浏览器中可以通过 javascript 修改 cookie （有限制）

服务端设置 cookie

```javascript
// httpOnly：不允许前端对 cookie 操作
res.setHeader('Set-Cookie', 'name=value; path=/; httpOnly');
```

前端设置 cookie

```javascript
document.cookie = 'name=value;';
```

## session

解决 cookie 的安全性问题

## redis

web server 最常用的缓存数据库，数据存在内存中，是一种键值存储

相较于 mysql 读取速度更快，（mysql 数据存在硬盘中，redis 数据存在内存中）

### 不适的场景

1. 操作频率不是很高
2. 断电不能丢失
3. 数据量太大，内存成本太高

### 安装

```bash
brew install redis
```

### 启动 redis 服务

```bash
# 启动 redis 服务
redis-server
# 进入 redis 模式
redis-cli

# 以下都是在 redis cli 模式相爱进行的命令
# 查看所有键名
keys *

# 设置键值
set myname zhangl

# 获取键值
get myname

# 删除键值
del myname

# 删除所有键
FLUSHDB
```

## nginx

高性能的 web 服务器，开源免费

一般用于静态服务、负载均衡、反向代理

## nginx 命令

```bash
# 修改 /usr/local 权限
 sudo chown -R $(whoami) /usr/local

# 下载 nginx
brew install nginx

# 配置文件位置
Windows：C:\\nginx\\conf\\nginx.conf
Mac：/usr/local/etc/nginx/nginx.conf

# 检测 nginx 配置文件格式是否正确
nginx -t

# 启动 nginx
nginx

# 重启|停止 nginx
nginx -s reload|stop
```

## 配置 nginx

```bash
vim /usr/local/etc/nginx/nginx.conf

# nginx config file
#user  nobody;
# 进程数 +
worker_processes  2;

#error_log  logs/error.log;
#error_log  logs/error.log  notice;
#error_log  logs/error.log  info;

#pid        logs/nginx.pid;


events {
    worker_connections  1024;
}


http {
    include       mime.types;
    default_type  application/octet-stream;

    #log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
    #                  '$status $body_bytes_sent "$http_referer" '
    #                  '"$http_user_agent" "$http_x_forwarded_for"';

    #access_log  logs/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    #keepalive_timeout  0;
    keepalive_timeout  65;

    #gzip  on;

    server {
        # 端口
        listen       8080;
        server_name  localhost;

        #charset koi8-r;

        #access_log  logs/host.access.log  main;

        # location / {
        #     root   html;
        #     index  index.html index.htm;
        # }

        # http://localhost:8080 => http://localhost:8001
        location / {
            proxy_pass http://localhost:8001;
        }

        # http://localhost:8000 => http://localhost:8001
        location /api/ {
            proxy_pass http://localhost:8000;
            # 保持代理后的请求头不变
            proxy_set_header Host $host;
        }

        #error_page  404              /404.html;

        # redirect server error pages to the static page /50x.html
        #
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   html;
        }

        # proxy the PHP scripts to Apache listening on 127.0.0.1:80
        #
        #location ~ \.php$ {
        #    proxy_pass   http://127.0.0.1;
        #}

        # pass the PHP scripts to FastCGI server listening on 127.0.0.1:9000
        #
        #location ~ \.php$ {
        #    root           html;
        #    fastcgi_pass   127.0.0.1:9000;
        #    fastcgi_index  index.php;
        #    fastcgi_param  SCRIPT_FILENAME  /scripts$fastcgi_script_name;
        #    include        fastcgi_params;
        #}

        # deny access to .htaccess files, if Apache's document root
        # concurs with nginx's one
        #
        #location ~ /\.ht {
        #    deny  all;
        #}
    }


    # another virtual host using mix of IP-, name-, and port-based configuration
    #
    #server {
    #    listen       8080;
    #    server_name localhost;

    #    location / {
    #       root   html;
    #       index  index.html index.htm;
    #  }
    }

    # HTTPS server
    #
    #server {
    #    listen       443 ssl;
    #    server_name  localhost;

    #    ssl_certificate      cert.pem;
    #    ssl_certificate_key  cert.key;

    #    ssl_session_cache    shared:SSL:1m;
    #    ssl_session_timeout  5m;

    #    ssl_ciphers  HIGH:!aNULL:!MD5;
    #    ssl_prefer_server_ciphers  on;

    #    location / {
    #        root   html;
    #        index  index.html index.htm;
    #    }
    #}
    include servers/*;
#}
```

## 需要启动的服务

- mysql
- redis
- http-server
- nginx

## 解决数据库自动关闭问题

```bash
 sudo chown -R mysql /usr/local/mysql/data
```

## I/O 性能瓶颈

- I/O 包括 "网络 I/O"、"文件 I/O"
- 相较于 CPU 计算和内存读写，I/O 的突出特点：慢

## crontab

linux 自动脚本执行

```bash
# 编辑 crontab 配置
$ crontab -e

# 分 时 日 月 星期
* 0 * * * sh 脚本绝对路径

# 查看 crontab 任务
$ crontab -l
```

## 安全

- sql 注入：窃取数据哭内容
- xss攻击：窃取前端的 cookie 内容
- 密码加密：保障用户安全

### sql 注入

攻击方式：输入一个 sql 片段，最终拼接成一段攻击代码

预防措施：使用 mysql 的 escape 函数处理输入内容即可

### xss 攻击

攻击方式：在页面展示内容中插入 js 代码，以获取网页信息

预防措施：转换生成 js 的特殊字符（转义特殊符号）, 我们使用 xss 第三方模块

### 密码加密

攻击方式：获取到用户名和密码，在尝试去登录其他系统

预防措施：密码加密，即使得到也不知道明文，crypto node 原生的加密模块

