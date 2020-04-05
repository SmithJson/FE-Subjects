/*
 * @Author: zhangl
 * @Date: 2020-04-05 00:27:55
 * @LastEditors: zhangl
 * @LastEditTime: 2020-04-05 22:49:29
 * @GitHub: https://github.com/SmithJson
 * @FilePath: /react_comment/src/index.js
 * @Description: Do not edit
 */
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './components/app/app'

// 定义渲染根组件标签的函数
ReactDOM.render(
  (<Provider store={store}>
    <App />
  </Provider>),
  document.getElementById('root')
)
