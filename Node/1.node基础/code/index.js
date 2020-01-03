/*
 * @Author: zhangl
 * @Date: 2020-01-02 23:10:46
 * @GitHub: https://github.com/SmithJson
 * @LastEditors  : zhangl
 * @LastEditTime : 2020-01-03 16:35:41
 * @Description: Do not edit
 * @FilePath: /FE-Subjects/Node/1.node基础/code/index.js
 */
const Express = require('./Express');

const app = new Express();

app.get('/', (req, res) => {
    res.write(JSON.stringify({
        name: res.query.name
    }));
});

app.listen(3000, () => {
    console.log('server is running');
});