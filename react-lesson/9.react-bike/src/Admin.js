/*
 * @Author: zhangl
 * @Date: 2020-04-29 17:52:23
 * @LastEditors: zhangl
 * @LastEditTime: 2020-05-03 11:41:42
 * @FilePath: /9.react-bike/src/Admin.js
 * @Description: Admin ????
 */
import React from 'react';
import { Row, Col } from 'antd';
import { NavLeft, Header, Footer } from './components';

export default class Admin extends React.Component {
	render() {
		return (
			<Row className="container">
				<Col span={4} className="nav-left-wrapper">
					<NavLeft />
				</Col>
				<Col span={20} className="main-wrapper">
					<Header />
					<Row className="content">{this.props.children}</Row>
					<Footer />
				</Col>
			</Row>
		);
	}
};
