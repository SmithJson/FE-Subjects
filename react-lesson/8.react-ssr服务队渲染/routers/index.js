/*
 * @Author: zhangl
 * @Date: 2020-04-15 01:11:17
 * @LastEditors: zhangl
 * @LastEditTime: 2020-04-15 10:17:53
 * @GitHub: https://github.com/SmithJson
 * @FilePath: /8.react-ssr服务队渲染/routers/index.js
 * @Description: router.js
 */
import React from 'react';
import { Route, Link } from 'react-router-dom';
import Index from '../container/index';
import Login from '../container/login';

export default () => {
    return (
        <div>
            <div>
                <Link to="/">首页</Link>
                <Link to="/login">登录页</Link>
            </div>
            <div>
                <Route path="/" component={Index} exact></Route>
                <Route path="/login" component={Login} exact></Route>
            </div>
        </div>
    );
};