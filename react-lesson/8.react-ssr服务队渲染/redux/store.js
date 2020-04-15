/*
 * @Author: zhangl
 * @Date: 2020-04-15 16:11:09
 * @LastEditors: zhangl
 * @LastEditTime: 2020-04-15 16:27:41
 * @GitHub: https://github.com/SmithJson
 * @FilePath: /8.react-ssr服务队渲染/redux/store.js
 * @Description: Do not edit
 */
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { indexReducer } from './index';

const newReducer = combineReducers({
    index: indexReducer,
});

export default () =>  createStore(newReducer, applyMiddleware(thunk));