/*
 * @Author: zhangl
 * @Date: 2020-04-06 00:24:04
 * @LastEditors: zhangl
 * @LastEditTime: 2020-04-06 00:31:20
 * @GitHub: https://github.com/SmithJson
 * @FilePath: /react-router-clean/src/react-hook/useStateDemo.js
 * @Description: Do not edit
 */
import React, { useState } from 'react';

export default () => {
    const [count, setCount] = useState(0);
    const handleAddCount = () => {
        setCount(count + 1);
    };

    return (
        <div>
            {count}
            <button onClick={handleAddCount}>添加</button>
        </div>
    );
};
