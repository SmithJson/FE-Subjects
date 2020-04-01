/*
 * @Author: zhangl
 * @Date: 2020-04-02 00:51:46
 * @LastEditors: zhangl
 * @LastEditTime: 2020-04-02 01:14:06
 * @GitHub: https://github.com/SmithJson
 * @FilePath: /4.react路由/react-router-clean/src/views/message.js
 * @Description: Do not edit
 */
import React, { Component } from 'react'
import { Route, NavLink } from 'react-router-dom'
import MessageDetail from './messageDetail';

export default class Message extends Component {
    state = {
        list: [
            { id: 1, value: '新闻1' },
            { id: 2, value: '新闻2' },
            { id: 3, value: '新闻3' },
        ],
    };

    render() {
        const { list } = this.state;
        return (
            <div>
                <ul>
                    {
                        list && list.map(item => (
                            <NavLink to={`/home/message/${item.id}`} key={item.id}>
                                {item.value}
                            </NavLink>
                        ))
                    }
                </ul>
                <div>
                    <Route path="/home/message/:id" component={MessageDetail} />
                </div>
            </div>
        );
    }
}