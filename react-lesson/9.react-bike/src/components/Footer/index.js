/*
 * @Author: zhangl
 * @Date: 2020-04-26 23:42:12
 * @LastEditors: zhangl
 * @LastEditTime: 2020-05-03 11:55:19
 * @GitHub: https://github.com/SmithJson
 * @FilePath: /9.react-bike/src/components/Footer/index.js
 * @Description: Footer 组件
 */
import React, { PureComponent } from 'react';
import project from '../../config/project.json';
import './index.less';

export default class Footer extends PureComponent {
	state = {};

	componentDidMount() {
		this.setState({
			...project,
		});
	}

	render() {
		const { copyright, effective } = this.state;
		return (
			<footer className="footer">
				<div>Copyright © {effective} juejin.com All Rights Reserved</div>
				<div>版权所有 {copyright}</div>
			</footer>
		);
	}
};