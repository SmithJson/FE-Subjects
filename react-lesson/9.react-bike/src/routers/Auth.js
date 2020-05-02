/*
 * @Author: zhangl
 * @Date: 2020-04-29 23:35:26
 * @LastEditors: zhangl
 * @LastEditTime: 2020-05-03 01:44:58
 * @FilePath: /9.react-bike/src/routers/Auth.js
 * @Description: 路由认证组件
 */
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Admin from '../Admin';
import {
	Home,
	Permission,
	Modals,
	Loading,
	FormLogin,
	FormRegister,
	TableBase,
	TableAdvanced,
	CityList,
	Order,
} from '../pages';

export default class Auth extends Component {
	render() {
		console.log(this.props.location);
		return (
			<Admin>
				<Route exact path='/home' component={Home} />
				<Route exact path='/ui/modals' component={Modals} />
				<Route exact path='/ui/loadings' component={Loading} />
				<Route exact path='/form/login' component={FormLogin} />
				<Route exact path='/form/register' component={FormRegister} />
				<Route exact path='/table/basic' component={TableBase} />
				<Route exact path='/table/high' component={TableAdvanced} />
				<Route exact path='/city' component={CityList} />
				<Route exact path='/order' component={Order} />
				<Route exact path='/permission' component={Permission} />
			</Admin>
		);
	}
};