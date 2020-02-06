/*
 * @Author: zhangl
 * @Date: 2020-02-06 21:49:27
 * @GitHub: https://github.com/SmithJson
 * @LastEditors  : zhangl
 * @LastEditTime : 2020-02-06 22:12:05
 * @Description: 加密
 * @FilePath: /FE-Subjects/Node-web-server/utils/cryp.js
 */
const crypto = require('crypto');

// 密钥
const SECRET_KEY = 'This is secret key!';

const createMd5Text = content => {
    const md5 = crypto.createHash('md5');

    return md5.update(content).digest('hex');
};

// 获取加密后的代码
const getPassword = password => {
    const str = `password=${password}&key=${SECRET_KEY}`;

    return createMd5Text(str);
};

module.exports = {
    getPassword,
};
