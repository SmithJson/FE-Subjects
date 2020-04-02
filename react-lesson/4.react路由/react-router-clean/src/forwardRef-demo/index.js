/*
 * @Author: zhangl
 * @Date: 2020-04-02 11:27:34
 * @LastEditors: zhangl
 * @LastEditTime: 2020-04-02 12:25:00
 * @GitHub: https://github.com/SmithJson
 * @FilePath: /4.react路由/react-router-clean/src/forwardRef-demo/index.js
 * @Description: ref
 */
import React, { PureComponent } from 'react';

const ForwardRef = React.forwardRef((props, ref) => {
    return (
        <input ref={ref}/>
    );
});

export default class ForwardRefDemo extends PureComponent {
    constructor() {
        super();
        this.forwardF = React.createRef();
    }

    componentDidMount() {
        this.forwardF.current.value = 'i am a forward ref'
    }

    render() {
        return (
            <div>
                <ForwardRef ref={this.forwardF} />
            </div>
        );
    }
}