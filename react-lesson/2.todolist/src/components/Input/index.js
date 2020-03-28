/*
 * @Author: zhangl
 * @Date: 2020-03-28 11:35:29
 * @LastEditors: zhangl
 * @LastEditTime: 2020-03-28 13:54:49
 * @GitHub: https://github.com/SmithJson
 * @FilePath: /2.todolist/src/components/Input/index.js
 * @Description: 输入组件
 */
import React, { Component } from 'react';

export default class InputValue extends Component {
    handleAddTodo = () => {
        const value = this.inp.value.trim();
        const { handleAddTodo } = this.props;
        if (value === '') {
            return;
        }
        const newValue = {
            value,
            selected: false,
        };
        handleAddTodo && handleAddTodo(newValue);
        this.inp.value = '';
    };

    render() {
        return (
            <div>
                <input type="text" placeholder="请输入内容..." ref={inp => this.inp = inp} />
                <button onClick={this.handleAddTodo}>submit</button>
            </div>
        );
    }
}
