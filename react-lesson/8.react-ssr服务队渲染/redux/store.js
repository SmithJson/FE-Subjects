/*
 * @Author: zhangl
 * @Date: 2020-04-15 16:11:09
 * @LastEditors: zhangl
 * @LastEditTime: 2020-04-18 15:06:40
 * @GitHub: https://github.com/SmithJson
 * @FilePath: /FE-Subjects/react-lesson/8.react-ssr服务队渲染/redux/store.js
 * @Description: Do not edit
 */
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { indexReducer } from './index';

const newReducer = combineReducers({
    index: indexReducer,
});

export const getClientStore = () => {
    const defaultState = window._context ? window._context : {}
    console.log(defaultState, window._context)
    return createStore(newReducer, defaultState, applyMiddleware(thunk));
};

export const getStore = () =>  createStore(newReducer, applyMiddleware(thunk));