/*
 * @Author: zhangl
 * @Date: 2020-05-03 12:54:24
 * @LastEditors: zhangl
 * @LastEditTime: 2020-05-03 14:07:50
 * @FilePath: /9.react-bike/src/redux/reducer/index.js
 * @Description: reducer 管理
 */
import { combineReducers } from 'redux';
import breadcrumbReducer from './breadcrumb-reducer';

export default combineReducers({
	breadcrumb: breadcrumbReducer,
})
