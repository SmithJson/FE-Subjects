/*
 * @Author: zhangl
 * @Date: 2020-04-02 20:33:00
 * @LastEditors: zhangl
 * @LastEditTime: 2020-04-05 19:02:19
 * @GitHub: https://github.com/SmithJson
 * @FilePath: /react-counter/src/components/app.jsx
 * @Description: Do not edit
 */
import { connect } from 'react-redux';
import { increment, decrement } from '../redux/actions';
import Counter from "../components/counter";

export default connect(
  (state) => ({ count: state }), 
  {
    increment,
    decrement,
  }
)(Counter);