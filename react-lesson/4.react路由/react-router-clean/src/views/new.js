/*
 * @Author: zhangl
 * @Date: 2020-04-02 00:37:05
 * @LastEditors: zhangl
 * @LastEditTime: 2020-04-02 00:46:57
 * @GitHub: https://github.com/SmithJson
 * @FilePath: /4.react路由/react-router-clean/src/views/new.js
 * @Description: Do not edit
 */
import React, { Component, Fragment } from 'react'

export default class New extends Component {
    state = {
        list: [
            { id: 1, value: '张飞' },
            { id: 2, value: '关羽' },
            { id: 3, value: '刘备' },
        ],
    };

    render() {
        const { list } = this.state;
        return (
            <Fragment>
                {list && list.map(item => <li key={item.id}>{item.value}</li>)}
            </Fragment>
        );
    }
}