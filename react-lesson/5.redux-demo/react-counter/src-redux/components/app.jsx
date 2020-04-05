/*
 * @Author: zhangl
 * @Date: 2020-04-02 20:33:00
 * @LastEditors: zhangl
 * @LastEditTime: 2020-04-05 18:18:46
 * @GitHub: https://github.com/SmithJson
 * @FilePath: /react-counter/src/components/app.jsx
 * @Description: Do not edit
 */
import React, {Component} from 'react';
import { increment, decrement } from '../redux/actions';

export default class App extends Component {
  numSelect = React.createRef();

  increment = () => {
    const num = this.numSelect.current.value*1
    this.props.store.dispatch(increment(num));
  }

  decrement = () => {
    const num = this.numSelect.current.value*1
    this.props.store.dispatch(decrement(num));
  }

  incrementIfOdd = () => {
    if(this.props.store.getState() % 2===1) {
      const num = this.numSelect.current.value*1
      this.props.store.dispatch(increment(num));
    }
  }

  incrementAsync = () => {
    setTimeout(() => {
      const num = this.numSelect.current.value*1
      this.props.store.dispatch(increment(num));
    }, 1000)
  }

  render () {
    return (
      <div>
        <p>click {this.props.store.getState()} times </p>
        <select ref={this.numSelect}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>{" "}
        <button onClick={this.increment}>+</button>{" "}
        <button onClick={this.decrement}>-</button>{" "}
        <button onClick={this.incrementIfOdd}>increment if odd</button>{" "}
        <button onClick={this.incrementAsync}>increment async</button>
      </div>
    );
  }
}