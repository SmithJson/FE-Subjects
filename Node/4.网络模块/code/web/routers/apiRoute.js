const url = require('url');

function apiRoute(req, res) {
    const obj = url.parse(req.url, true);
    const query = obj.query;
    const {username, password} = query;

    if (username === 'zhangl' && password === '123456') {
        res.end('login success');
    } else {
        res.statusCode = 403;
        res.end('login fail');
    }
}

module.exports = apiRoute;