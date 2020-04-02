/*
 * @Author: zhangl
 * @Date: 2020-04-02 11:27:34
 * @LastEditors: zhangl
 * @LastEditTime: 2020-04-02 12:40:05
 * @GitHub: https://github.com/SmithJson
 * @FilePath: /4.react路由/react-router-clean/src/content-demo/index.js
 * @Description: ref
 */
import React, { Component } from 'react';

const { Provider, Consumer } = React.createContext({});

class Son extends Component {
    render() {
        return (
            <Consumer>
                {value => (
                    <div>
                        <p>这是孩子组件：{value.color}</p>
                        <GrandSon />
                    </div>
                )}
            </Consumer>
        );
    }
}

class GrandSon extends Component {
    render() {
        return (
            <Consumer>
                {value => <p>这是孙子组件：{value.color}</p>}
            </Consumer>
        );
    }
}

export default class ContentDemo extends Component {
    state = {
        color: 'black'
    };

    render() {
        return (
            <Provider value={this.state}>
                <Son />
            </Provider>
        );
    }
}