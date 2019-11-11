/*
 * @Author: zhangl
 * @Date: 2019-10-18 00:41:06
 * @LastEditors: zhangl
 * @LastEditTime: 2019-10-18 09:22:22
 * @Description: 介绍
 */
var fs = require('fs');
var rs = fs.createReadStream('./data.txt', {});
var ws = fs.createWriteStream('./test.txt', {
    encoding: 'utf-8',
    flags: 'a',
})

// 建立流操作
rs.pipe(ws);
