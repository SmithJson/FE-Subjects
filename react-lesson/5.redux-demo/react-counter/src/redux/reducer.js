/*
 * @Author: zhangl
 * @Date: 2020-04-05 20:50:32
 * @LastEditors: zhangl
 * @LastEditTime: 2020-04-05 21:12:25
 * @GitHub: https://github.com/SmithJson
 * @FilePath: /react-counter/src/redux/reducer.js
 * @Description: Do not edit
 */
import { INCREMENT, DECREMENT } from './action-type';

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