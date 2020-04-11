/*
 * @Author: zhangl
 * @Date: 2020-04-11 18:57:06
 * @LastEditors: zhangl
 * @LastEditTime: 2020-04-11 19:05:43
 * @GitHub: https://github.com/SmithJson
 * @FilePath: /FE-Subjects/react-lesson/4.react路由/react-router-clean/src/react-hook/useEffectDemo.js
 * @Description: Do not edit
 */
import React, { useEffect, useState } from 'react';

export default props => {
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        setTimeout(() => setLoading(false), 2000);
    }, [loading]);

    return (
        <div>
            {loading ? '加载中...' : '加载成功'}
        </div>
    );
};