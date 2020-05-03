/*
 * @Author: zhangl
 * @Date: 2020-05-03 13:00:07
 * @LastEditors: zhangl
 * @LastEditTime: 2020-05-03 14:08:31
 * @FilePath: /9.react-bike/src/redux/store.js
 * @Description: store
 */
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducer';

const generateStore = () => createStore(
	reducer,
	composeWithDevTools(applyMiddleware(thunk))
);

export default generateStore;