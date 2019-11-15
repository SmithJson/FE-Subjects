const render = require('../lib/render');

function formRoute(req, res) {
    render('form.html', res);
}

module.exports = formRoute;