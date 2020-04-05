/*
 * @Author: zhangl
 * @Date: 2020-04-05 18:41:28
 * @LastEditors: zhangl
 * @LastEditTime: 2020-04-05 18:45:34
 * @GitHub: https://github.com/SmithJson
 * @FilePath: /react-counter/src/redux/actions.js
 * @Description: actions
 */
import { INCREMENT, DECREMENT } from './acton-type';

export const increment = num => ({ type: INCREMENT, data: num });
export const decrement = num => ({ type: DECREMENT, data: num });