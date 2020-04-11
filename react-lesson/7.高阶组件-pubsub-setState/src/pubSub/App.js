/*
 * @Author: zhangl
 * @Date: 2020-04-11 19:48:07
 * @LastEditors: zhangl
 * @LastEditTime: 2020-04-11 19:49:20
 * @GitHub: https://github.com/SmithJson
 * @FilePath: /FE-Subjects/react-lesson/7.高阶组件-pubsub-setState/src/pubSub/App.js
 * @Description: Do not edit
 */
import React, { Component } from 'react';
import A from './A';
import B from './B';

export default class APP extends Component {
    render() {
        return (
            <div>
                <A />
                <B />
            </div>
        );
    }
}