/*
 * @Author: zhangl
 * @Date: 2020-04-29 17:40:41
 * @LastEditors: zhangl
 * @LastEditTime: 2020-05-03 14:13:24
 * @FilePath: /9.react-bike/src/routers/index.js
 * @Description: ????
 */
import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import App from '../App';
import Auth from '../routers/Auth';
import { Error, Login } from '../pages';
import { Loading } from '../components';
import { handleChangeBreadcrumb } from '../redux/action';

class NRouter extends Component {
	render() {
		console.log(this.props);
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

export default connect(
	state => ({ aaa: state }),
	{
		handleChangeBreadcrumb,
	}
)(NRouter)