/*
 * @Author: zhangl
 * @Date: 2019-10-23 22:36:11
 * @LastEditors: zhangl
 * @LastEditTime: 2019-10-23 23:03:23
 * @Description: express模拟
 */
const url = require('url');

function Exp() {
    this.router = [];
}

Exp.prototype.use = function (path, fn) {
    this.router.push({
        path,
        fn,
    });
};

Exp.prototype.handle = function (req, res) {
    let count = 0;
    const obj = url.parse(req.url, true);

    req.pathname = obj.pathname;
    req.query = obj.query;

    while (true) {
        const layer = this.router[count++];

        if (!layer) {
            return false;
        }

        if (layer.path === req.pathname) {
            layer.fn(req, res);

            return true;
        }
    }
};

module.exports = Exp;