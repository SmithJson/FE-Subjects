/*
 * @Author: zhangl
 * @Date: 2020-01-20 23:45:01
 * @GitHub: https://github.com/SmithJson
 * @LastEditors  : zhangl
 * @LastEditTime : 2020-01-21 01:08:21
 * @Description: Do not edit
 * @FilePath: /FE-Subjects/Webpack/4.vue环境搭建/code/src/main.js
 */
// import Vue from 'vue/dist/vue.esm';
import Vue from 'vue';
import App from './app.vue';
import router from './router';

// 实例化 vue 对象
const app = new Vue({
    el: '#app',
    data() {
        return {
            message: 'Hello World 一叶小和尚',
            test: 'mm',
        };
    },
    render: h => h(App),
    router,
});
