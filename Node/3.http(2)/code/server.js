/*
 * @Author: zhangl
 * @Date: 2020-01-12 15:42:13
 * @GitHub: https://github.com/SmithJson
 * @LastEditors  : zhangl
 * @LastEditTime : 2020-01-12 19:57:06
 * @Description: Do not edit
 * @FilePath: /FE-Subjects/Node/3.http(2)/code/server.js
 */
const fs = require('fs');
const path = require('path');
const connect = require('connect');
const cors = require('cors');
const bodyParser = require('body-parser');
const formidable = require('formidable');

const app = connect();

app
    .use(cors())
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: true }))
    .use('/upload', (requset, response, next) => {
        response.setHeader('Content-Type', 'application/json; charset=utf-8');

        const form = new formidable.IncomingForm();
        const savePath = path.resolve(__dirname, './static');
        const isExist = fs.existsSync(savePath);

        if (!isExist) fs.mkdirSync(savePath);

        form.uploadDir = savePath;
        form.keepExtensions = true;
        form.parse(requset, (err, fields, files) => {
            if (err) {
                response.end(err);
                return;
            }

            Object.keys(files).forEach(item => {
                const file = files[item];

                if (file.size <= 0 || file.size > form.maxFileSize) {
                    response.statusCode = 400;
                    fs.unlinkSync(file.path);
                    response.end(`${file.name} is illegal`);

                    return;
                }
            });

            response.end(JSON.stringify({
                status: 0,
                msg: 'success',
                data: files,
            }));

            next();
        });
    })
    .listen(3000, () => console.log('server is running'));
