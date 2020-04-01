/*
 * @Author: zhangl
 * @Date: 2020-04-02 01:05:13
 * @LastEditors: zhangl
 * @LastEditTime: 2020-04-02 01:17:47
 * @GitHub: https://github.com/SmithJson
 * @FilePath: /4.react路由/react-router-clean/src/views/messageDetail.js
 * @Description: Do not edit
 */
import React, { Component } from 'react'

export default class MessageDetail extends Component {
    state = {
        list: [
            { id: 1, title: '新闻1的标题', content: '新闻1的内容' },
            { id: 2, title: '新闻2的标题', content: '新闻2的内容' },
            { id: 3, title: '新闻3的标题', content: '新闻3的内容' },
        ],
    };

    render() {
        const { match } = this.props;
        const { id } = match.params;
        const detail = this.state.list.find(item => item.id === id - 0) || {};
        return (
            <div>
                <div>id: {detail.id}</div>
                <div>title: {detail.title}</div>
                <div>content: {detail.content}</div>
            </div>
        )
    }
}
