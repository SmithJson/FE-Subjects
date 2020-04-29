/*
 * @Author: zhangl
 * @Date: 2020-04-26 23:42:28
 * @LastEditors: zhangl
 * @LastEditTime: 2020-04-29 16:59:26
 * @GitHub: https://github.com/SmithJson
 * @FilePath: /9.react-bike/src/components/NavLeft/index.js
 * @Description: NavLeft
 */
import React, { Component } from 'react';
import { Menu, Switch } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import { LOGO_PNG } from '../../images';
import './index.less';

const { SubMenu } = Menu;

export default class NavLeft extends Component {
	state = {
		theme: 'dark',
	};

	handleChangeMenuStyle = () => {
		this.setState({
			theme: this.state.theme === 'light' ? 'dark' : 'light',
		});
	};

	render() {
		const { theme } = this.state;
		return (
			< div className={`nav-left ${theme}`}>
				<div className="logo-wrapper">
					<img src={LOGO_PNG} alt={LOGO_PNG} className="logo" />
					<div className="system-name">
						{/* eslint-disable */}
						{PROJECT_NAME}
					</div>
				</div>
				<div className="menu-wrapper">
					<div className="style-change-button">
						<Switch onChange={this.handleChangeMenuStyle} />
						<span>&nbsp;切换主题</span>
					</div>
					<Menu onClick={() => { }} theme={theme} mode="inline">
						<SubMenu
							key="sub1"
							title={
								<span>
									<MailOutlined />
									<span>学生信息</span>
								</span>
							}
						>
							<Menu.ItemGroup title="基本信息">
								<Menu.Item key="1">姓名</Menu.Item>
								<Menu.Item key="2">性别</Menu.Item>
							</Menu.ItemGroup>
							<Menu.ItemGroup title="选课">
								<Menu.Item key="3">课程</Menu.Item>
								<Menu.Item key="4">签到</Menu.Item>
								<Menu.Item key="5">成绩</Menu.Item>
							</Menu.ItemGroup>
						</SubMenu>
						<SubMenu
							key="sub2"
							title={
								<span>
									<MailOutlined />
									<span>学生信息</span>
								</span>
							}
						>
							<Menu.ItemGroup title="基本信息">
								<Menu.Item key="1">姓名</Menu.Item>
								<Menu.Item key="2">性别</Menu.Item>
							</Menu.ItemGroup>
							<Menu.ItemGroup title="选课">
								<Menu.Item key="3">课程</Menu.Item>
								<Menu.Item key="4">签到</Menu.Item>
								<Menu.Item key="5">成绩</Menu.Item>
							</Menu.ItemGroup>
						</SubMenu>
					</Menu>
				</div>
			</div>
		);
	}
};