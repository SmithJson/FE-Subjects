/*
 * @Author: zhangl
 * @Date: 2020-05-03 12:49:36
 * @LastEditors: zhangl
 * @LastEditTime: 2020-05-03 13:50:36
 * @FilePath: /9.react-bike/src/redux/reducer/breadcrumb-reducer.js
 * @Description: 面包屑 reducer
 */
import { CHANGE_BREADCRUMB } from '../action';

const initialState = {
	menuName: ''
};

function reducer(state = initialState, action) {
	switch (action.type) {
		case CHANGE_BREADCRUMB:
			return {
				...state,
				menuName: action.value,
			};
		default:
			return { ...state };
	}
}

export default reducer;