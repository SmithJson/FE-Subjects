/*
 * @Author: zhangl
 * @Date: 2020-04-11 19:26:09
 * @LastEditors: zhangl
 * @LastEditTime: 2020-04-11 19:40:36
 * @GitHub: https://github.com/SmithJson
 * @FilePath: /FE-Subjects/react-lesson/7.高阶组件-pubsub-setState/src/hightComponent/index.js
 * @Description: Do not edit
 */
import React, { Component } from 'react';

const HightComponentDemo = HighComponent => {
    return class Container extends Component {
        render() {
            return (
                <div>
                    <header>公共头部</header>
                    <HighComponent />
                    <footer>公共底部</footer>
                </div>
            );
        }
    }
};

export default HightComponentDemo;