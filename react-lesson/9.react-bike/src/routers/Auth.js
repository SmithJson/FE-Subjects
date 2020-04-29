/*
 * @Author: zhangl
 * @Date: 2020-04-29 23:35:26
 * @LastEditors: zhangl
 * @LastEditTime: 2020-04-29 23:50:25
 * @FilePath: /9.react-bike/src/routers/Auth.js
 * @Description: 路由认证组件
 */
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Admin from '../Admin';
import { Home, Permission } from '../pages';

export default class Auth extends Component {
	render() {
		console.log(this.props.location);
		return (
			<Admin>
				<Route exact path='/home' component={Home} />
				<Route exact path='/permission' component={Permission} />
			</Admin>
		);
	}
};