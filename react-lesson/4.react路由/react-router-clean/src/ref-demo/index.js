/*
 * @Author: zhangl
 * @Date: 2020-04-02 11:27:34
 * @LastEditors: zhangl
 * @LastEditTime: 2020-04-02 18:50:49
 * @GitHub: https://github.com/SmithJson
 * @FilePath: /FE-Subjects/react-lesson/4.react路由/react-router-clean/src/ref-demo/index.js
 * @Description: ref
 */
import React, { PureComponent } from 'react';

export default class RefDemo extends PureComponent {
    constructor() {
        super();
        this.cref = React.createRef();
    }

    componentDidMount() {
        setTimeout(() => {
            this.refs.stringRef.value = 'i am a string ref';
            this.inp.value = 'i am a arrow function ref';
            this.cref.current.value = 'i am a crete ref';
            this.cref.current.focus();
        }, 500);
    }

    render() {
        return (
            <div>
                <input ref="stringRef" />
                <input ref={inp => this.inp = inp} />
                <input ref={this.cref}/>
            </div>
        );
    }
}