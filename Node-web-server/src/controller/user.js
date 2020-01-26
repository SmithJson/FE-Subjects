/*
 * @Author: zhangl
 * @Date: 2020-01-26 17:06:23
 * @GitHub: https://github.com/SmithJson
 * @LastEditors  : zhangl
 * @LastEditTime : 2020-01-26 17:11:21
 * @Description: Do not edit
 * @FilePath: /FE-Subjects/Node-web-server/src/controller/user.js
 */
const loginCheck = ({ username, password }) => {
    if (username === 'zhangl' && password === '123456') {
        return true;
    }

    return false;
};

module.exports = {
    loginCheck,
};