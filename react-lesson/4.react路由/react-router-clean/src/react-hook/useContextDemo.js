/*
 * @Author: zhangl
 * @Date: 2020-04-06 00:32:59
 * @LastEditors: zhangl
 * @LastEditTime: 2020-04-06 00:40:33
 * @GitHub: https://github.com/SmithJson
 * @FilePath: /react-router-clean/src/react-hook/useContextDemo.js
 * @Description: Do not edit
 */
import React, { useContext } from 'react';

export default () => {
    const colorContext = React.createContext({});

    const Son = () => {
        const { color } = useContext(colorContext);
        return <div>孩子组件 {color}</div>
    };

    const GrandSon = () => {
        const { color } = useContext(colorContext);
        return <div>孙子组件 {color}</div>
    };

    return (
        <colorContext.Provider value={{color: 'black'}}>
            <Son />
            <GrandSon />
        </colorContext.Provider>
    );
};
