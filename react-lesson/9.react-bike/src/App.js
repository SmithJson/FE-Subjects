/*
 * @Author: zhangl
 * @Date: 1985-10-26 16:15:00
 * @LastEditors: zhangl
 * @LastEditTime: 2020-05-03 11:41:34
 * @FilePath: /9.react-bike/src/App.js
 * @Description: App 容器组件
 */
import React, { Component } from 'react';

export default class App extends Component {
	render() {
		return (
			<div>{this.props.children}</div>
		);
	}
};
