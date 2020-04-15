/*
 * @Author: zhangl
 * @Date: 2020-04-15 01:11:17
 * @LastEditors: zhangl
 * @LastEditTime: 2020-04-15 16:54:05
 * @GitHub: https://github.com/SmithJson
 * @FilePath: /8.react-ssr服务队渲染/routers/index.js
 * @Description: router.js
 */
import Index from '../container/index';
import Login from '../container/login';

export default [
    {
        path: '/',
        component: Index,
        exact: true,
        key: 'index',
    },
    {
        path: '/login',
        component: Login,
        exact: true,
        key: 'login',
    },
];