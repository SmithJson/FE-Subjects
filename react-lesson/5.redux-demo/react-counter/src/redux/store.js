/*
 * @Author: zhangl
 * @Date: 2020-04-05 20:52:40
 * @LastEditors: zhangl
 * @LastEditTime: 2020-04-05 21:06:50
 * @GitHub: https://github.com/SmithJson
 * @FilePath: /react-counter/src/redux/store.js
 * @Description: Do not edit
 */
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { counter } from './reducer';

const store = createStore(
    counter, 
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;