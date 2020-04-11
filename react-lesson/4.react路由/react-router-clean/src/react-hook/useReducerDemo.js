/*
 * @Author: zhangl
 * @Date: 2020-04-11 19:06:33
 * @LastEditors: zhangl
 * @LastEditTime: 2020-04-11 19:16:38
 * @GitHub: https://github.com/SmithJson
 * @FilePath: /FE-Subjects/react-lesson/4.react路由/react-router-clean/src/react-hook/useReducerDemo.js
 * @Description: Do not edit
 */
import React, { useReducer } from 'react';

const UseReducerDemo = () => {
    const counterReducer = function (state, action) {
        if (action.type === 'increment') {
            return state + 1;
        } else if (action.type === 'decrement') {
            return state - 1;
        } else {
            return state;
        }
    };

    const handleIncrementCount = () => {
        dispatch({
            type: 'increment',
        });
    };

    const handleDecrementCount = () => {
        dispatch({
            type: 'decrement',
        });
    };

    const [state, dispatch] = useReducer(counterReducer, 0)

    return (
        <div>
            {state}
            <button onClick={handleIncrementCount}>加1</button>
            <button onClick={handleDecrementCount}>减1</button>
        </div>
    );
};

export default UseReducerDemo;