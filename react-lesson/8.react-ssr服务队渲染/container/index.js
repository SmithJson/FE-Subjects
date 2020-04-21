/*
 * @Author: zhangl
 * @Date: 2020-04-14 23:13:52
 * @LastEditors: zhangl
 * @LastEditTime: 2020-04-18 14:41:40
 * @GitHub: https://github.com/SmithJson
 * @FilePath: /FE-Subjects/react-lesson/8.react-ssr服务队渲染/container/index.js
 * @Description: Do not edit
 */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getIndexList } from '../redux/index';

const Index = props => {
    const [count, setCount] = useState(0);
    
    return (
        <div>
            <span>{count}</span>
            <button onClick={() => setCount(count + 1)}>添加</button>
            <button onClick={props.getIndexList}>加载列表</button>
            <ul>
                {props.list.map(item => <li key={item.id}>{item.title}</li>)}
            </ul>
        </div>
    );
};

Index.load = store => store.dispatch(getIndexList());

export default connect(
    state => ({ list: state.index.list }),
    {getIndexList}
)(Index);