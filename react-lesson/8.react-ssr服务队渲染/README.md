# 零到一搭建 react SSR 框架 {ignore=true}

[toc]

## 一. 初始化项目

#### 1. 生产 package.json

```bash
npm init -y
``` 

#### 2. 安装 react 依赖包

```bash
npm install react react-dom express --save
```

#### 3. 新建 client、server 文件夹

#### 4. 新建 container 文件夹

<font color="red">⚠️container 是客户端和服务端共同的入口，用于存放页面</font>

#### 5. 配置服务端和客户端的 webpack 配置文件

下载 webpack 包

```bash
npm install webpack webpack-cli babel-loader @babel/preset-react @babel/preset-env @babel/core --save
```

## 二. 编写开发测试案例

#### 1. container

```javascript
import React, { useState } from 'react';

const Index = () => {
    const [count, setCount] = useState(0);
    
    return (
        <div>
            <span>{count}</span>
            <button onClick={() => setCount(count + 1)}>添加</button>
        </div>
    );
};

export default Index;
```

#### 2. server

```javascript
import React from 'react'; // 服务端也得引入 react ！！！
import express from 'express';
import Index from '../container';
// 专门在服务队使用，将渲染出的真实 dom 转化为字符串
import { renderToString } from 'react-dom/server';

const app = express();

// 访问静态资源
app.use(express.static('public'));

app.get('/', (req, res) => {
    const content = renderToString(<Index />)
    const html = `
        <html>
            <head>
                <title>SSR</title>
            </head>
            <body>
                <h1>React SSR Test</h1>
                <div id="root">${content}</div>
            </body>
        </html>
    `;
    res.send(html);
});

app.listen(10086, () => {
    console.log('port: 10086 server is running');
});
```

#### 3.client

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import Index from '../container';

// SSR 客户端使用 hydrate，不使用 render
ReactDOM.hydrate(<Index />, document.getElementById('root'));
```

## 三. 配置 Router

#### 1. 安装 react-router-dom

```bash
npm install react-router-dom --save
```

#### 1. 创建 routers

```javascript
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
```

#### 2. server

```javascript
import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import express from 'express';
import Routers from '../routers';
// 专门在服务队使用，将渲染出的真实 dom 转化为字符串

const app = express();

// 访问客户端静态资源
app.use(express.static('public'));

// 由于服务端会把页面路由当作接口路由处理，导致了刷新了页面后，页面查找不到
// 通过使用通配符匹配解决·
app.get('*', (req, res) => {
    const content = renderToString(
        // 服务端使用 StaticRouter 作为包裹容器组件
        /* 由于服务端和客户端的渲染不同步，导致出现 warning ，通过在 static router
            添加 location 来指定当前的访问路径，从而使客户端和服务端的渲染内容一致 */
        <StaticRouter location={req.path}>
            <Routers />
        </StaticRouter>
    )
    const html = `
        <html>
            <head>
                <title>SSR</title>
            </head>
            <body>
                <h1>React SSR Test</h1>
                <div id="root">${content}</div>
                <script src='/main.js'></script>
            </body>
        </html>
    `;
    // 引入客户端代码，因为逻辑代码在客户端
    res.send(html);
});

app.listen(10086, () => {
    console.log('port: 10086 server is running');
});
```

#### 3. client

```javascript
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
```

#### 4. 优化路由

```javascript
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
```

## 四. 配置 Redux

#### 1. 安装 redux 相关包

```bash
npm install redux react-redux redux-thunk axios --save
```

#### 2. 新建 redux 文件夹

```javascript
// index.js
import axios from 'axios';

// action-type
const GET_LIST = 'INDEX/GET_LIST';

// actions
const changeList = list => ({
    type: GET_LIST,
    list,
});

export const getIndexList = () => {
    return dispatch => {
        return axios.get('http://localhost:3000/course/list').then((res) => {
            const { list } = res.data;
            dispatch(changeList(list));
        });
    }
};

// reducer
const initialState = {
    list: [],
};
export const indexReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_LIST:
            return {
                ...state,
                list: action.list,
            };
        default:
            return state;
    }
};
```

```javascript
// store.js
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { indexReducer } from './index';

const newReducer = combineReducers({
    index: indexReducer,
});

export default () =>  createStore(newReducer, applyMiddleware(thunk));
```

#### 3. server

```javascript
import React from 'react';
import { StaticRouter, Link, Route } from 'react-router-dom';
// 专门在服务队使用，将渲染出的真实 dom 转化为字符串
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { matchRoutes } from 'react-router-config';
import express from 'express';
import getStore from '../redux/store';
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
    // 解决客户端和服务端 redux state 不一致问题
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
```

#### 4. client

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import getStore from '../redux/store';
import routers from '../routers';

const store = getStore();
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
```