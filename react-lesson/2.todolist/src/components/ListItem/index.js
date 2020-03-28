/*
 * @Author: zhangl
 * @Date: 2020-03-28 11:55:49
 * @LastEditors: zhangl
 * @LastEditTime: 2020-03-28 14:14:16
 * @GitHub: https://github.com/SmithJson
 * @FilePath: /2.todolist/src/components/ListItem/index.js
 * @Description: 列表项组件
 */
import React, { Component } from 'react'

export default class ListItem extends Component {
    handleDelTodo = () => {
        const { index, handleDelTodo } = this.props;
        handleDelTodo && handleDelTodo(index);
    };

    handleChangeTodoIsSelected = () => {
        const { index, handleChangeTodoIsSelected } = this.props;
        handleChangeTodoIsSelected && handleChangeTodoIsSelected(index);
    };

    render() {
        const { value: item, selectedAll } = this.props;
        return (
            <li>
                <div>
                    <input
                        type="checkbox"
                        checked={selectedAll || item.selected}
                        onChange={this.handleChangeTodoIsSelected}
                    />
                    <span>{item.value}</span>
                </div>
                <button onClick={this.handleDelTodo}>删除</button>
            </li>
        )
    }
}
