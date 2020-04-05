/*
 * @Author: zhangl
 * @Date: 2020-04-01 23:33:54
 * @LastEditors: zhangl
 * @LastEditTime: 2020-04-06 00:34:22
 * @GitHub: https://github.com/SmithJson
 * @FilePath: /react-router-clean/src/index.js
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
import UseStateDemo from './react-hook/useStateDemo';
import UseContextDemo from './react-hook/useContextDemo';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
            <UseContextDemo />
            // <UseStateDemo />
            // <ContentDemo />
            // <Router>
            //     <App/>
            // </Router> 
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
