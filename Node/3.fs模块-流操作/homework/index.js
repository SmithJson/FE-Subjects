/*
 * @Author: zhangl
 * @Date: 2019-10-17 23:45:55
 * @LastEditors: zhangl
 * @LastEditTime: 2019-10-18 00:01:23
 * @Description: 遍历所有文件夹
 */
var fs = require('fs');

// 递归遍历文件夹
function bfs(dirPath) {
    var stat = fs.statSync(dirPath);

    if (stat.isFile()) { // 如果是文件，则读取内容且结束递归
        fs.readFile(dirPath, 'utf-8', function (err, data) {
            console.log(data);
        });

        return;
    }

    if (!stat.isDirectory()) { // 如果不是文件交，则结束递归
        return;
    }

    // 如果是文件夹，则继续递归遍历里面的内容
    fs.readdir(dirPath, function (err, data) {
        data.forEach(function (item) {
            bfs(`${dirPath}/${item}`);
        });
    });
}

bfs('./db1');
