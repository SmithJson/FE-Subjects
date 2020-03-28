/*
 * @Author: zhangl
 * @Date: 2020-03-28 12:01:53
 * @LastEditors: zhangl
 * @LastEditTime: 2020-03-28 14:05:26
 * @GitHub: https://github.com/SmithJson
 * @FilePath: /2.todolist/src/components/List/index.js
 * @Description: 列表组件
 */
import React, { Component } from 'react';
import { ListItem } from '../index';

export default class List extends Component {
    render() {
        const { list = [], handleChangeTodoIsSelected } = this.props
        return (
            <ul>
                {
                    list.length !== 0 && list.map((item, index) =>
                    <ListItem
                        {...this.props}
                        key={index}
                        index={index}
                        value={item}
                        handleChangeTodoIsSelected={handleChangeTodoIsSelected}
                    />)
                }
            </ul>
        );
    }
}
