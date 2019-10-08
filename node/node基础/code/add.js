/*
 * @Author: zhangl
 * @Date: 2019-10-08 21:58:29
 * @LastEditors: zhangl
 * @LastEditTime: 2019-10-08 22:09:02
 * @Description: 加法
 */
function add(a, b) {
    return a + b;
}

// module.exports.add = add;
exports.add = add;

/**
 * var module.exports = {}
 * var exports = module.exports
 * exports.add = add
 * return module.exports
 *
 * 切记不要
 * exports = add
 */