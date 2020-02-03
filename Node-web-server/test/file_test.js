/*
 * @Author: zhangl
 * @Date: 2020-02-03 21:41:51
 * @GitHub: https://github.com/SmithJson
 * @LastEditors  : zhangl
 * @LastEditTime : 2020-02-03 21:54:06
 * @Description: Do not edit
 * @FilePath: /FE-Subjects/Node-web-server/test/file_test.js
 */
const fs = require('fs');
const path = require('path');

const fileName = path.join(__dirname, 'data.txt');

// 读文件
fs.readFile(fileName, (err, data) => {
    if (err) {
        console.error(err);

        return;
    }
    console.log(data.toString());
});

const content = '这是新添加的内容\n';
const option = {
    flag: 'a', // 'a'：append，'w'：cover
};

// 写文件
fs.writeFile(fileName, content, option, err => {
    if (err) {
        console.error(err);

        return;
    }
});

// 判断文件是否存在
fs.exists(fileName, exists => {
    const result = exists ? '文件存在' : '文件不存在';

    console.log(result);
});