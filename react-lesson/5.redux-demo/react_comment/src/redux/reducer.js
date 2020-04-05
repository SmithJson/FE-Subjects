/*
 * @Author: zhangl
 * @Date: 2020-04-05 22:34:40
 * @LastEditors: zhangl
 * @LastEditTime: 2020-04-05 23:37:53
 * @GitHub: https://github.com/SmithJson
 * @FilePath: /react_comment/src/redux/reducer.js
 * @Description: Do not edit
 */
import { ADD_COMMENT, DEL_COMMENT, GET_COMMENTS } from './action-type';

export function commentReducer(state = [], action) {
    switch(action.type) {
        case ADD_COMMENT:
            return [...state, action.data];
        case DEL_COMMENT:
            return state.filter((item, index) => index !== action.data);
        case GET_COMMENTS:
            return action.data;
        default:
            return state;
    }
};