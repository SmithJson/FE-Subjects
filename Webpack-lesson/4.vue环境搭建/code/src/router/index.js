/*
 * @Author: zhangl
 * @Date: 2020-01-21 00:45:04
 * @GitHub: https://github.com/SmithJson
 * @LastEditors  : zhangl
 * @LastEditTime : 2020-01-21 01:37:49
 * @Description: 路由配置
 * @FilePath: /FE-Subjects/Webpack/4.vue环境搭建/code/router/index.js
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import Page1 from '@/pages/page1.vue';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'hash',
    routes: [
        {
            path: '/page1',
            name: 'page1',
            component: Page1,
            beforeEnter(from, to, next) { // 进入前
                console.log(`beforEnterHome from ${from} to ${to}`);
                setTimeout(() => {
                    next();
                }, 1000);
            }
        },
        {
            path: '/page2',
            name: 'page2',
            // component: Page2,
            component: import('@/pages/page2.vue'), // 按需加载
        },
    ],
});