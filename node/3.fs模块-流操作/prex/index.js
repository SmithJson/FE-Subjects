/*
 * @Author: zhangl
 * @Date: 2019-10-18 23:24:49
 * @LastEditors: zhangl
 * @LastEditTime: 2019-10-18 23:44:11
 * @Description: 介绍
 */
const autoprefixer = require('autoprefixer')
const postcss = require('postcss')
const fs = require('fs')

fs.watch('./index.css', 'utf-8', function (eventName, filename) {
    console.log(eventName, filename);
    fs.readFile('./' + filename, 'utf-8', (err, css) => {
        postcss([autoprefixer])
            .process(css, {
                from: './' + filename,
                to: './newTest.css'
            })
            .then(result => {
                fs.writeFile('./newTest.css', result.css, () => true)
            })
    })
});
