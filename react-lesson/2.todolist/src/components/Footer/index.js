/*
 * @Author: zhangl
 * @Date: 2020-03-28 12:29:26
 * @LastEditors: zhangl
 * @LastEditTime: 2020-03-28 14:33:03
 * @GitHub: https://github.com/SmithJson
 * @FilePath: /2.todolist/src/components/Footer/index.js
 * @Description: 底部组件
 */
import React, { Component } from 'react'

export default class Footer extends Component {
    handleChangeTodoIsSelected = (e) => {
        const { handleChangeSelectedAll } = this.props;
        const value = e.target.checked;
        handleChangeSelectedAll && handleChangeSelectedAll(value);
    };

    render() {
        const { list, selectedAll } = this.props;
        const selectedCount = list.reduce((prev, cur) => prev += cur.selected, 0);
        return (
            <div>
                <input
                    type="checkbox"
                    checked={selectedAll}
                    onChange={this.handleChangeTodoIsSelected}
                />
                <span>总计：{list.length}</span>，
                <span>已完成：{selectedCount}</span>
            </div>
        );
    }
}
