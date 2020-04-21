/*
 * @Author: zhangl
 * @Date: 2020-04-14 23:13:57
 * @LastEditors: zhangl
 * @LastEditTime: 2020-04-18 14:32:20
 * @GitHub: https://github.com/SmithJson
 * @FilePath: /FE-Subjects/react-lesson/8.react-ssr服务队渲染/client/index.js
 * @Description: 客户端
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { getClientStore } from '../redux/store';
import routers from '../routers';

const store = getClientStore();
const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div>
                    <Link to="/">首页</Link>
                    <Link to="/login">登录页</Link>
                </div>
                <div>
                    {routers.map(route => <Route {...route} />)}
                </div>
            </BrowserRouter>
        </Provider>
    );
};

// SSR 客户端使用 hydrate，不使用 render
ReactDOM.hydrate(
    <App />, 
    document.getElementById('root'));