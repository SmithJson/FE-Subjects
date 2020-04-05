/*
 * @Author: zhangl
 * @Date: 2020-04-05 18:57:51
 * @LastEditors: zhangl
 * @LastEditTime: 2020-04-05 19:03:51
 * @GitHub: https://github.com/SmithJson
 * @FilePath: /react-counter/src/components/counter.jsx
 * @Description: Do not edit
 */
import React, {Component} from 'react'

export default class App extends Component {
    state = {
        count: 0
    }

    increment = () => {
        const num = this.refs.numSelect.value*1
        this.props.increment(num);
    }

    decrement = () => {
        const num = this.refs.numSelect.value*1
        this.props.decrement(num);
    }

    incrementIfOdd = () => {
        let { count } = this.props;
        if(count % 2 === 1) {
        const num = this.refs.numSelect.value*1
        this.props.increment(num);
        }
    }

    incrementAsync = () => {
        setTimeout(() => {
        const num = this.refs.numSelect.value*1
        this.props.increment(num);
        }, 1000)
    }

    render () {
        const {count} = this.props;

        return (
        <div>
            <p>
            click {count} times {' '}
            </p>
            <select ref="numSelect">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            </select>{' '}
            <button onClick={this.increment}>+</button>{' '}
            <button onClick={this.decrement}>-</button>{' '}
            <button onClick={this.incrementIfOdd}>increment if odd</button>{' '}
            <button onClick={this.incrementAsync}>increment async</button>
        </div>
        )
    }
}