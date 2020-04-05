/*
 * @Author: zhangl
 * @Date: 2020-04-05 18:02:55
 * @LastEditors: zhangl
 * @LastEditTime: 2020-04-05 18:08:05
 * @GitHub: https://github.com/SmithJson
 * @FilePath: /react-counter/src/redux/store.js
 * @Description: store
 */
import { createStore } from 'redux';
import { counter } from './reducer';

const common = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
export default createStore(counter, common());