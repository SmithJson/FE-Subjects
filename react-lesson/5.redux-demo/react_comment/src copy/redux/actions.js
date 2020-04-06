/*
 * @Author: zhangl
 * @Date: 2020-04-05 22:29:31
 * @LastEditors: zhangl
 * @LastEditTime: 2020-04-05 23:35:54
 * @GitHub: https://github.com/SmithJson
 * @FilePath: /react_comment/src/redux/actions.js
 * @Description: Do not edit
 */
import { ADD_COMMENT, DEL_COMMENT, GET_COMMENTS } from './action-type';

// 添加评论
export const addComment = comment => ({ type: ADD_COMMENT, data: comment });
// 删除评论
export const delComment = index => ({ type: DEL_COMMENT, data: index });
// 获得评论列表
export const getComments = comments => ({ type: GET_COMMENTS, data: comments });

// 异步获取评论列表
export const getCommentsAsync = () => {
    return dispatch => {
        const list = [
            {
                name: '张三',
                content: 'react so easy',
            },
            {
                name: '李四',
                content: 'react so difficult',
            },
            {
                name: '王五',
                content: 'react so cute',
            },
        ];
        setTimeout(() => {
            dispatch(getComments(list));
        }, 2000);
    };
};