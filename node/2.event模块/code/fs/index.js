/*
 * @Author: zhangl
 * @Date: 2019-10-13 00:00:57
 * @LastEditors: zhangl
 * @LastEditTime: 2019-10-13 00:37:35
 * @Description: fs模块
 */
const fs = require('fs');
const path = require('path');

const stats = fs.statSync(path.resolve(__dirname, './data.txt'));

if (stats.isFile()) { // 如果是文件
    // 异步获取文件
    fs.readFile(path.resolve(__dirname, './data.txt'), 'utf-8', function (err, data) {
        if (err) {
            console.log(err);

            return;
        }

        console.log('async：' + data);
        fs.mkdir(path.resolve(__dirname, './dir'), function () {
            console.log('create dir successful');
            fs.writeFile(path.resolve(__dirname, './dir/data2.txt'), data, 'utf-8', function (err) {
                if (err) {
                    console.log(err);

                    return;
                }
                console.log('write successful');
            });
            // fs.writeFileSync(path.resolve(__dirname, './data3.txt'), data, 'utf-8');
        });
    });

    const data = fs.readFileSync(path.resolve(__dirname, './data.txt'), 'utf-8');
    console.log('sync：' + data);
} else {
    console.log('it is not file')
}