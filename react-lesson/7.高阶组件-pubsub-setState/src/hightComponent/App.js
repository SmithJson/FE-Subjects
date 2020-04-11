/*
 * @Author: zhangl
 * @Date: 2020-04-10 18:57:14
 * @LastEditors: zhangl
 * @LastEditTime: 2020-04-11 19:42:55
 * @GitHub: https://github.com/SmithJson
 * @FilePath: /FE-Subjects/react-lesson/7.高阶组件-pubsub-setState/src/hightComponent/App.js
 * @Description: Do not edit
 */
import React from 'react';
import HightComponent from './index';

class A extends React.Component {
    render() {
        return (
            <div>我是组件值</div>
        );
    }
}

const HOC = HightComponent(A)
function App() {
    return (
        <div className="App">
            <HOC />
        </div>
    );
}

export default App;
