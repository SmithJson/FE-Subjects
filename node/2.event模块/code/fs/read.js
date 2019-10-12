/*
 * @Author: zhangl
 * @Date: 2019-10-13 00:48:30
 * @LastEditors: zhangl
 * @LastEditTime: 2019-10-13 00:53:12
 * @Description: 读取文件夹里的文件
 */
const fs = require('fs');
const path = require('path');

fs.readdir(path.resolve(__dirname, './dir'), function (err, data) {
    if (err) return err;

    data.forEach(function (item) {
        const stats = fs.statSync(path.resolve(__dirname, './dir', item));

        console.log(item + 'is file：' + stats.isFile());
    });
});