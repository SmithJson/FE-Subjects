/*
 * @Author: zhangl
 * @Date: 2020-04-06 19:29:40
 * @LastEditors: zhangl
 * @LastEditTime: 2020-04-06 19:39:36
 * @GitHub: https://github.com/SmithJson
 * @FilePath: /react_comment/src/container/index.js
 * @Description: Do not edit
 */
import { connect } from 'react-redux';
import { addComment, delComment, getComments, getCommentsAsync } from '../redux/actions';
import App from '../components/app/app';

export default connect(
    state => ({ comments: state }),
    {
        addComment,
        delComment,
        getComments,
        getCommentsAsync,
    }
)(App);