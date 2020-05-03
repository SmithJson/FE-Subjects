/*
 * @Author: zhangl
 * @Date: 2020-04-26 23:42:28
 * @LastEditors: zhangl
 * @LastEditTime: 2020-05-03 11:57:55
 * @GitHub: https://github.com/SmithJson
 * @FilePath: /9.react-bike/src/components/NavLeft/index.js
 * @Description: NavLeft
 */
import React, { Component } from 'react';
import { Menu, Switch } from 'antd';
import { NavLink } from 'react-router-dom';
import { LOGO_PNG } from '../../images';
import { menuConfig as config } from '../../routers/routerConfig';
import project from '../../config/project.json';
import './index.less';

const { SubMenu } = Menu;

export default class NavLeft extends Component {
	state = {
		theme: 'dark',
		openKeys: [],
	};

	// ?? subMenu ? keys
	rootSubMenuKeys = [];

	createMenuByRouteConfig = config => config.map(route => {
		if (!route.children) {
			return (
				<Menu.Item key={route.key}>
					{route.icon}
					<NavLink to={route.key}>{route.title}</NavLink>
				</Menu.Item>
			);
		}
		this.rootSubMenuKeys.push(route.key);
		return (
			<SubMenu
				key={route.key}
				title={
					<span>
						{route.icon}
						<span>{route.title}</span>
					</span>
				}
			>
				{this.createMenuByRouteConfig(route.children)}
			</SubMenu>
		);
	});

	handleChangeMenuStyle = () => {
		this.setState({
			theme: this.state.theme === 'light' ? 'dark' : 'light',
		});
	};

	handleChangeMenuOpen = openKeys => {
		const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
		if (this.rootSubMenuKeys.indexOf(latestOpenKey) === -1) {
			this.setState({ openKeys });
		} else {
			this.setState({
				openKeys: latestOpenKey ? [latestOpenKey] : [],
			});
		}
	};

	handleChangeMenuItem = () => {
		console.log('rrrr');
	};

	render() {
		const { theme, openKeys } = this.state;
		return (
			< div className={`nav-left ${theme}`}>
				<div className="logo-wrapper">
					<img src={LOGO_PNG} alt={LOGO_PNG} className="logo" />
					<div className="system-name">
						{project.name}
					</div>
				</div>
				<div className="menu-wrapper">
					<div className="style-change-button">
						<Switch onChange={this.handleChangeMenuStyle} />
						<span>主题修改</span>
					</div>
					<Menu
						onClick={this.handleChangeMenuItem}
						theme={theme}
						mode="inline"
						onOpenChange={this.handleChangeMenuOpen}
						openKeys={openKeys}
					>
						{this.createMenuByRouteConfig(config)}
					</Menu>
				</div>
			</div>
		);
	}
};