/*
 * @Author: zhangl
 * @Date: 2020-04-11 19:43:51
 * @LastEditors: zhangl
 * @LastEditTime: 2020-04-11 20:04:58
 * @GitHub: https://github.com/SmithJson
 * @FilePath: /FE-Subjects/react-lesson/7.高阶组件-pubsub-setState/src/pubSub/A.js
 * @Description: Do not edit
 */
import React, { Component } from 'react';
import pubsub from 'pubsub-js';

export default class Publish extends Component {
    state = {
        value: ''
    };

    handleChang = e => {
        this.setState({
            value: e.target.value,
        });
    };

    handleSubmit = () => {
        const { value } = this.state;
        pubsub.publish('SOS', value);
    };

    render() {
        return (
            <div>
                A的值<input type="text" onChange={this.handleChang} />
                <button onClick={this.handleSubmit}>提交</button>
            </div>
        );
    }
}