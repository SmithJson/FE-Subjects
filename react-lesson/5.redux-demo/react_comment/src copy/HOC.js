/*
 * @Author: zhangl
 * @Date: 2020-04-06 19:14:17
 * @LastEditors: zhangl
 * @LastEditTime: 2020-04-06 19:46:05
 * @GitHub: https://github.com/SmithJson
 * @FilePath: /react_comment/src/HOC.js
 * @Description: Do not edit
 */
import React from 'react';

export const { Provider: HOCProvider, Consumer } = React.createContext({});

export const HOCConsumer = data => {
    const newData = (data && typeof data === 'object') ? data : {};
    return Component => {
        return class extends React.Component {
            render() {
                return (
                    <Consumer>
                        {value => <Component {...Object.assign(newData, this.props, value)} />}
                    </Consumer>
                );
            }
        }
    }
};