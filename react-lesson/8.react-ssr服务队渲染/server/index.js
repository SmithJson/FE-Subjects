/*
 * @Author: zhangl
 * @Date: 2020-04-14 23:13:46
 * @LastEditors: zhangl
 * @LastEditTime: 2020-04-21 13:35:28
 * @GitHub: https://github.com/SmithJson
 * @FilePath: /FE-Subjects/react-lesson/8.react-ssr服务队渲染/server/index.js
 * @Description: 服务端
 */
import React from 'react';
import { StaticRouter, Link, Route } from 'react-router-dom';
// 专门在服务队使用，将渲染出的真实 dom 转化为字符串
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { matchRoutes } from 'react-router-config';
import express from 'express';
import { getStore } from '../redux/store';
import routers from '../routers';

const app = express();
const store = getStore();

// 访问客户端静态资源
app.use(express.static('public'));

// 由于服务端会把页面路由当作接口路由处理，导致了刷新了页面后，页面查找不到
// 通过使用通配符匹配解决·
app.get('*', (req, res) => {
    // 根据请求路径匹配出对应的路由对象
    const matchedRoutes = matchRoutes(routers, req.path);
    // 集中处理请求结果
    const promises = [];
    matchedRoutes.forEach(item => {
        const { load } = item.route.component;
        if (load) {
            const promise = new Promise((resolve, reject) => {
                load(store).then(resolve).catch(reject);
            });
            promises.push(promise);
        }
    });
    Promise.all(promises).then(() => {
        // 服务端使用 StaticRouter 作为包裹容器组件
        const content = renderToString(
            <Provider store={store}>
                <StaticRouter location={req.path}>
                    <div>
                        <Link to="/">首页</Link>
                        <Link to="/login">登录页</Link>
                    </div>
                    <div>
                        {routers.map(route => <Route {...route} />)}
                    </div>
                </StaticRouter>
            </Provider>
        )
        const html = `
        <html>
            <head>
                <title>SSR</title>
            </head>
            <body>
                <h1>React SSR Test</h1>
                <div id="root">${content}</div>
                <script>
                    window._context = ${JSON.stringify(store.getState())}
                </script>
                <script src='/main.js'></script>
            </body>
        </html>
    `;
        // 引入客户端代码，因为逻辑代码在客户端
        res.send(html);
    });
});

app.listen(10086, () => {
    console.log('port: 10086 server is running');
});
