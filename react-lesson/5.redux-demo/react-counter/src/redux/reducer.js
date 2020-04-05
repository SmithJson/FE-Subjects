/*
 * @Author: zhangl
 * @Date: 2020-04-05 18:49:45
 * @LastEditors: zhangl
 * @LastEditTime: 2020-04-05 19:04:11
 * @GitHub: https://github.com/SmithJson
 * @FilePath: /react-counter/src/redux/reducer.js
 * @Description: reducer
 */
import { INCREMENT, DECREMENT } from './acton-type';

export function counter(state = 0, action) {
    switch(action.type) {
        case INCREMENT:
            return state + action.data;
        case DECREMENT:
            return state - action.data;
        default:
            return state;
    }
}