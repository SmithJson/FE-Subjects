const url = require('url');
const sql = require('../sql');

function apiRoute(req, res) {
    const obj = url.parse(req.url, true);
    const query = obj.query;
    const {username, password} = query;

    sql.isAccount(username).then(pd => {
        if (pd) {
            if (pd === password) { // 密码正确
                res.setHeader('location', '/index');
                res.setHeader('set-cookie', 'duyi=P:duyi:123456');
                res.statusCode = 302;
                res.end();
            } else { // 密码错误
                res.statusCode = 401;
                res.end('password is error');
            }
        } else { // 用户不存在
            res.statusCode = 401;
            res.end('user is not exist');
        }
    });
}

module.exports = apiRoute;