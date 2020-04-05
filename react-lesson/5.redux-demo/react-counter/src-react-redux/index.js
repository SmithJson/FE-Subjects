/*
 * @Author: zhangl
 * @Date: 2020-04-05 00:58:23
 * @LastEditors: zhangl
 * @LastEditTime: 2020-04-05 18:56:42
 * @GitHub: https://github.com/SmithJson
 * @FilePath: /react-counter/src/index.js
 * @Description: Do not edit
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './components/app';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
