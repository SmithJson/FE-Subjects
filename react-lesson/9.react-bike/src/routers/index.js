/*
 * @Author: zhangl
 * @Date: 2020-04-29 17:40:41
 * @LastEditors: zhangl
 * @LastEditTime: 2020-04-29 23:46:48
 * @FilePath: /9.react-bike/src/routers/index.js
 * @Description: 路由组件
 */
import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import App from '../App';
import Auth from '../routers/Auth';
import { Error, Login } from '../pages';
import { Loading } from '../components';

export default class NRouter extends Component {
	render() {
		return (
			<Loading>
				<Router>
					<App>
						<Switch>
							<Route exact path='/login' component={Login} />
							<Route exact path='/404' component={Error} />
							<Switch>
								<Auth />
							</Switch>
						</Switch>
					</App>
				</Router>
			</Loading>
		);
	}
};