/*
 * @Author: zhangl
 * @Date: 2019-10-23 10:43:16
 * @LastEditors: zhangl
 * @LastEditTime: 2019-10-23 22:56:46
 * @Description: web请求
 */
const http = require('http');
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


const server = http.createServer((req, res) => {
    if (app.handle(req, res)) return;

    res.end('404');
    res.statusCode = 404;
});

server.listen(3000);
console.log('Server is running');
