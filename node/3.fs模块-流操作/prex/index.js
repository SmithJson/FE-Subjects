/*
 * @Author: zhangl
 * @Date: 2019-10-18 23:24:49
 * @LastEditors: zhangl
 * @LastEditTime: 2019-10-18 23:32:56
 * @Description: 介绍
 */
const autoprefixer = require('autoprefixer')
const postcss = require('postcss')
const fs = require('fs')

fs.readFile('./index.css', 'utf-8', (err, css) => {
    postcss([autoprefixer])
        .process(css, {
            from: './index.css',
            to: './newTest.css'
        })
        .then(result => {
            console.log(result.css)
            fs.writeFile('./newTest.css', result.css, () => true)
        })
})