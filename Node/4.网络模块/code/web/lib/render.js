const fs = require('fs');

function render(filename, res) {
    fs.readFile(`./views/${filename}`, 'utf-8', (err, data) => {
        if (err) {
            res.statusCode = 500;
            res.end('500');
        }

        res.end(data);
    });
}

module.exports = render;