/*
 * @Author: zhangl
 * @Date: 2019-10-08 21:19:57
 * @LastEditors: zhangl
 * @LastEditTime: 2019-11-02 23:53:01
 * @Description: node第一个文件
 */
var http = require('http');
var fs = require('fs');
var path = require('path');
var server = http.createServer(function (req, res) {
    fs.readFile(path.resolve(__dirname, './taobao.html'), 'utf-8', function (err, data) {
        console.log(data)
        res.end(data);
    });
});
server.listen(8080);