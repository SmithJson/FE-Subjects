/*
 * @Author: zhangl
 * @Date: 2020-04-26 23:42:12
 * @LastEditors: zhangl
 * @LastEditTime: 2020-04-27 01:36:52
 * @GitHub: https://github.com/SmithJson
 * @FilePath: /9.react-bike/src/components/Footer/index.js
 * @Description: Footer
 */
import React, { PureComponent } from 'react';
import './index.less';

export default class Footer extends PureComponent {
	render() {
		return (
			<footer className="footer">
				<div>Copyright © 2020-2021 juejin.com All Rights Reserved</div>
				<div>版权所有 一叶小和尚</div>
			</footer>
		);
	}
};