/*
 * @Author: zhangl
 * @Date: 2020-04-11 19:43:57
 * @LastEditors: zhangl
 * @LastEditTime: 2020-04-11 20:03:28
 * @GitHub: https://github.com/SmithJson
 * @FilePath: /FE-Subjects/react-lesson/7.高阶组件-pubsub-setState/src/pubSub/B.js
 * @Description: Do not edit
 */
import React, { Component } from 'react';
import pubsub from 'pubsub-js';

export default class SubScribe extends Component {
    state = {
        value: '',
    };

    componentDidMount() {
        pubsub.subscribe('SOS', (res, data) => {
            this.setState({
                value: data
            });
        });
    }

    render() {
        const { value} = this.state;
        return (
            <div>
                B 接受到 A 的值 {value}
            </div>
        );
    }
}