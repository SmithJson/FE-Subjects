/*
 * @Author: zhangl
 * @Date: 2020-01-20 21:33:00
 * @GitHub: https://github.com/SmithJson
 * @LastEditors  : zhangl
 * @LastEditTime : 2020-01-20 21:37:27
 * @Description: Do not edit
 * @FilePath: /FE-Subjects/Webpack/4.vue环境搭建/code/src/assets/javascript/config.js
 */
const config = {};

config.test = {
    value: 'Hello World',
};

config.enviorment = {
    dev: {
        server: 'http://localhost:8081',
        setting: 'http://localhost:8082',
        manage: 'http://localhost:8083',
    },
    test: {
        server: 'http://192.168.0.1:8081',
        setting: 'http://192.168.0.1:8082',
        manage: 'http://192.168.0.1:8083',
    },
    prod: {
        server: 'http://test.ruanmou:8081',
        setting: 'http://test.ruanmou:8082',
        manage: 'http://test.ruanmou:8083',
    },
};

export default config;