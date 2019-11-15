/*
 * @Author: zhangl
 * @Date: 2019-10-23 10:43:16
 * @LastEditors: zhangl
 * @LastEditTime: 2019-10-23 22:56:46
 * @Description: web请求
 */
const fs = require('fs');
const http = require('http');
const path = require('path');
const url = require('url');
const Exp = require('./lib/exp');
const render = require('./lib/render');
const apiRoute = require('./routers/apiRoute');
const formRoute = require('./routers/formRoute');

const app = new Exp();

app.use('/taobao', (req, res) => {
    render('taobao.html', res);
});
app.use('/baidu', (req, res) => {
    render('baidu.html', res);
});
app.use('/index', (req, res) => {
    render('index.html', res);
});
app.use('/form', formRoute);
app.use('/api', apiRoute);

const regExp = /\.(js|css)$/;
const server = http.createServer((req, res) => {
    const obj = url.parse(req.url, true);

    req.pathname = obj.pathname;
    req.query = obj.query;

    if (regExp.test(req.pathname)) {
        serverStatic(req, res);
        return;
    }

    if (app.handle(req, res)) return;

    res.end('404');
    res.statusCode = 404;
});

function serverStatic(req, res) {
    // 文件直接读取
    // fs.readFile(path.join(__dirname, 'static', req.pathname), 'utf-8', (err, data) => {
    //     if (err) {
    //         res.statusCode = 500;
    //         res.end('500');
    //     }
    //
    //     res.end(data);
    // });

    const rs = fs.createReadStream(path.join(__dirname, 'static', req.pathname));

    // 流操作
    // rs.on('data', data => res.write(data));
    // rs.on('end', () => res.end('结束了'));

    // 管道操作
    rs.pipe(res);

}

server.listen(3000);
console.log('Server is running');
