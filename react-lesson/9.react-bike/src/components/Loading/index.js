/*
 * @Author: zhangl
 * @Date: 2020-04-29 22:40:04
 * @LastEditors: zhangl
 * @LastEditTime: 2020-04-29 22:58:47
 * @FilePath: /9.react-bike/src/components/Loading/index.js
 * @Description: Do not edit
 */
import React, { Component, Fragment } from 'react';
import './index.less';

export default class Loading extends Component {
	render() {
		return (
			<Fragment>
				{/* 通过 redux 实现 */}
				{this.props.fetching && (
					<div id="loading-wrapper">
						<ul className="item-box">
							<li className="item item-1"></li>
							<li className="item item-2"></li>
							<li className="item item-3"></li>
							<li className="item item-4"></li>
						</ul>
					</div>
				)}
				{this.props.children}
			</Fragment>
		);
	}
}