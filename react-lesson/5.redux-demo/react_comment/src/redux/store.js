/*
 * @Author: zhangl
 * @Date: 2020-04-05 22:43:15
 * @LastEditors: zhangl
 * @LastEditTime: 2020-04-05 23:07:20
 * @GitHub: https://github.com/SmithJson
 * @FilePath: /react_comment/src/redux/store.js
 * @Description: Do not edit
 */
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { commentReducer } from './reducer';

const store = createStore(
    commentReducer,
    composeWithDevTools(applyMiddleware(thunk)),
);

export default store;