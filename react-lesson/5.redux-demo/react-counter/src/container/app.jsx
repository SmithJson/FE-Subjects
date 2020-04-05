/*
 * @Author: zhangl
 * @Date: 2020-04-05 21:01:25
 * @LastEditors: zhangl
 * @LastEditTime: 2020-04-05 21:09:15
 * @GitHub: https://github.com/SmithJson
 * @FilePath: /react-counter/src/container/app.jsx
 * @Description: Do not edit
 */
import { connect } from 'react-redux';
import { increment, incrementAsync, decrement } from "../redux/actions";
import Counter from "../components/counter";

export default connect(
    (state) => ({ count: state }), 
    {
        increment,
        incrementAsync,
        decrement,
    }
)(Counter);