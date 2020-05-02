/*
 * @Author: zhangl
 * @Date: 2020-04-26 23:42:19
 * @LastEditors: zhangl
 * @LastEditTime: 2020-05-02 16:56:07
 * @GitHub: https://github.com/SmithJson
 * @FilePath: /9.react-bike/src/components/Header/index.js
 * @Description: Header
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import './index.less';

export default class Header extends Component {
	render() {
		return (
			<header className="header">
				<div className="header-top-wrapper">
					<div className="header-top">
						<div className="user-tip">
							<div>欢迎，</div>
							<div className="user-name">一叶小和尚</div>
						</div>
						<Button type="link">退出</Button>
					</div>
				</div>
				<div className="breadcrumb-wrapper">
					<div className="breadcrumb">
						<Link to="/">首页</Link>
					</div>
					<div className="weather-wrapper">
						<div className="weather">
							<img className="weather-icon" src="/favicon.ico" alt=""/>
							<div>天气晴朗，10 % ～ 20 %</div>
						</div>
						<div className="time">2019-10-09 12:00:00</div>
					</div>
				</div>
			</header>
		);
	}
};