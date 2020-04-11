/*
 * @Author: zhangl
 * @Date: 2020-04-10 18:57:14
 * @LastEditors: zhangl
 * @LastEditTime: 2020-04-11 19:48:23
 * @GitHub: https://github.com/SmithJson
 * @FilePath: /FE-Subjects/react-lesson/7.高阶组件-pubsub-setState/src/index.js
 * @Description: Do not edit
 */
import React from 'react';
import ReactDOM from 'react-dom';
// import App from './hightComponent/App';
import App from './pubSub/App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
