/*
 * @Author: zhangl
 * @Date: 2020-02-05 02:02:53
 * @GitHub: https://github.com/SmithJson
 * @LastEditors  : zhangl
 * @LastEditTime : 2020-02-05 02:24:53
 * @Description: 日志打印
 * @FilePath: /FE-Subjects/Node-web-server/utils/log.js
 */
const fs = require('fs');
const path = require('path');

const createWriteStream = fileName => {
    const fullfileName = path.join(__dirname, '../', 'logs', fileName);
    const writeStream = fs.createWriteStream(fullfileName, {
        flags: 'a',
    });

    return writeStream;
};

const accessWriteStream = createWriteStream('access.log');

const writeLog = (writeStream, log) => {
    writeStream.write(`${log}\n`);
};

const access = log => {
    writeLog(accessWriteStream, log);
};

module.exports = {
    access,
};