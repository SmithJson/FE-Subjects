/*
 * @Author: zhangl
 * @Date: 2020-04-05 20:46:56
 * @LastEditors: zhangl
 * @LastEditTime: 2020-04-05 21:10:12
 * @GitHub: https://github.com/SmithJson
 * @FilePath: /react-counter/src/redux/actions.js
 * @Description: Do not edit
 */
import { INCREMENT, DECREMENT } from './action-type';

// 同步
export const increment = num => ({ type: INCREMENT, data: num });
export const decrement = num => ({ type: DECREMENT, data: num });

// 异步
export const incrementAsync = num => {
    return dispatch => {
        setTimeout(() => {
            dispatch(increment(num));
        }, 2000);
    };
};