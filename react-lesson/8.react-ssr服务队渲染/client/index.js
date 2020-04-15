/*
 * @Author: zhangl
 * @Date: 2020-04-14 23:13:57
 * @LastEditors: zhangl
 * @LastEditTime: 2020-04-15 13:59:06
 * @GitHub: https://github.com/SmithJson
 * @FilePath: /8.react-ssr服务队渲染/client/index.js
 * @Description: 客户端
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routers from '../routers';

// SSR 客户端使用 hydrate，不使用 render
ReactDOM.hydrate(
    <BrowserRouter>
        <Routers />
    </BrowserRouter>, 
    document.getElementById('root'));