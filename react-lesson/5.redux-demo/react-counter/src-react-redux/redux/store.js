/*
 * @Author: zhangl
 * @Date: 2020-04-05 18:51:44
 * @LastEditors: zhangl
 * @LastEditTime: 2020-04-05 19:08:51
 * @GitHub: https://github.com/SmithJson
 * @FilePath: /react-counter/src/redux/store.js
 * @Description: store
 */
import { createStore } from 'redux';
import { counter } from '../redux/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

// 第一种调试 redux
// const common = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

// 第二种调试 redux
// redux-devtools-extension

export default createStore(counter, composeWithDevTools());