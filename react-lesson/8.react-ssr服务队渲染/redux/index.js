/*
 * @Author: zhangl
 * @Date: 2020-04-15 16:11:14
 * @LastEditors: zhangl
 * @LastEditTime: 2020-04-15 17:09:04
 * @GitHub: https://github.com/SmithJson
 * @FilePath: /8.react-ssr服务队渲染/redux/index.js
 * @Description: reducer action
 */
import axios from 'axios';

// action-type
const GET_LIST = 'INDEX/GET_LIST';

// actions
const changeList = list => ({
    type: GET_LIST,
    list,
});

export const getIndexList = () => {
    return dispatch => {
        return axios.get('http://localhost:3000/course/list').then((res) => {
            const { list } = res.data;
            dispatch(changeList(list));
        });
    }
};

// reducer
const initialState = {
    list: [],
};
export const indexReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_LIST:
            return {
                ...state,
                list: action.list,
            };
        default:
            return state;
    }
};