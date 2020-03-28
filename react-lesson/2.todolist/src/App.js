/*
 * @Author: zhangl
 * @Date: 2020-03-28 10:58:34
 * @LastEditors: zhangl
 * @LastEditTime: 2020-03-28 15:14:11
 * @GitHub: https://github.com/SmithJson
 * @FilePath: /FE-Subjects/react-lesson/2.todolist/src/App.js
 * @Description: 根组件
 */
import React from 'react';
import { Input, List, Footer } from './components';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoList: [],
            selectedAll: false,
        };
    }

    componentDidMount() {
        const cache = localStorage.getItem('cache');
        if (cache != null) {
            this.setState(JSON.parse(cache));
            return;
        }
        const { todoList } = this.state;
        this.setState({
            selectedAll: this.isSelected(todoList),
        }, () => localStorage.setItem('cache', JSON.stringify(this.state)));
    }

    isSelected = list => list.length !== 0 && list.every(item => item.selected);

    handleAddTodo = value => {
        const { todoList } = this.state;
        todoList.unshift(value);
        this.setState({
            todoList,
            selectedAll: this.isSelected(todoList),
        }, () => localStorage.setItem('cache', JSON.stringify(this.state)));
    };

    handleDelTodo = index => {
        const { todoList } = this.state;
        todoList.splice(index, 1);
        this.setState({
            todoList,
            selectedAll: this.isSelected(todoList),
        }, () => localStorage.setItem('cache', JSON.stringify(this.state)));
    };

    handleChangeTodoIsSelected = index => {
        const { todoList } = this.state;
        const selected = todoList[index].selected;
        todoList[index].selected = !selected;
        this.setState({
            todoList,
            selectedAll: this.isSelected(todoList),
        }, () => localStorage.setItem('cache', JSON.stringify(this.state)));
    };

    handleChangeSelectedAll = value => {
        const { todoList } = this.state;
        this.setState({
            selectedAll: value,
            todoList: todoList.map(item => {
                item.selected = value;
                return item;
            }),
        }, () => localStorage.setItem('cache', JSON.stringify(this.state)));
    };

    render() {
        const { todoList, selectedAll } = this.state;
        return (
            <div className="center">
                <div>
                    <Input handleAddTodo={this.handleAddTodo} />
                    <List
                        selectedAll={selectedAll}
                        list={todoList}
                        handleDelTodo={this.handleDelTodo}
                        handleChangeTodoIsSelected={this.handleChangeTodoIsSelected}
                    />
                    <Footer
                        list={todoList}
                        selectedAll={selectedAll}
                        handleChangeSelectedAll={this.handleChangeSelectedAll}
                    />
                </div>
            </div>
        );
    }
}

export default App;
