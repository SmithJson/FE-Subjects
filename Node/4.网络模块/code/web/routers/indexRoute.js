const render = require('../lib/render');

function indexRoute(req, res) {
    const {cookie} = req;

    if (cookie['duyi'] === 'P:duyi:123456') { // 校验用户 cookie
        render('index.html', res);
        return;
    }

    res.setHeader('location', '/form');
    res.statusCode = 302;
    res.end();
}

module.exports = indexRoute;