/*
 * @Author: zhangl
 * @Date: 2019-10-23 10:43:16
 * @LastEditors: zhangl
 * @LastEditTime: 2019-10-23 22:56:46
 * @Description: web请求
 */
const http = require('http');
const fs = require('fs');
const url = require('url');
const exp = require('./lib/exp');

const app = new exp();

app.use('/taobao', (req, res) => {
    render('taobao.html', res);
});
app.use('/baidu', (req, res) => {
    render('baidu.html', res);
});
app.use('/index', (req, res) => {
    render('index.html', res);
});
app.use('/form', (req, res) => {
    render('form.html', res);
});
app.use('/api', (req, res) => {
    const obj = url.parse(req.url, true);
    const query = obj.query;
    const { username, password } = query;

    if (username === 'zhangl' && password === '123456') {
        res.end('login success');
    } else {
        res.statusCode = 403;
        res.end('login fail');
    }
});


const server = http.createServer((req, res) => {
    if (app.handle(req, res)) {
        return;
    } else {
        res.end('404');
        res.statusCode = 404;
    }
});

function render(filename, res) {
    fs.readFile(`./views/${filename}`, 'utf-8', (err, data) => {
        if (err) {
            res.statusCode = 500;
            res.end('500');
        }

        res.end(data);
    });
}

server.listen(3000);
console.log('Server is running');
