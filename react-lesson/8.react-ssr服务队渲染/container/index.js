/*
 * @Author: zhangl
 * @Date: 2020-04-14 23:13:52
 * @LastEditors: zhangl
 * @LastEditTime: 2020-04-15 02:13:13
 * @GitHub: https://github.com/SmithJson
 * @FilePath: /8.react-ssr服务队渲染/container/index.js
 * @Description: Do not edit
 */
import React, { useState } from 'react';

const Index = () => {
    const [count, setCount] = useState(0);
    
    return (
        <div>
            <span>{count}</span>
            <button onClick={() => setCount(count + 1)}>添加</button>
        </div>
    );
};

export default Index;