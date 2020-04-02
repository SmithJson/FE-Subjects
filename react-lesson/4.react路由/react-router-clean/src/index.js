/*
 * @Author: zhangl
 * @Date: 2020-04-01 23:33:54
 * @LastEditors: zhangl
 * @LastEditTime: 2020-04-02 12:28:11
 * @GitHub: https://github.com/SmithJson
 * @FilePath: /4.react路由/react-router-clean/src/index.js
 * @Description: Do not edit
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import RefDemo from './ref-demo';
import ForwardRefDemo from './forwardRef-demo';
import ContentDemo from './content-demo';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
            <ContentDemo />
            // <Router>
            //     <App/>
            // </Router> 
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
