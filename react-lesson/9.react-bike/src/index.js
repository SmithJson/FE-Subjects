/*
 * @Author: zhangl
 * @Date: 1985-10-26 16:15:00
 * @LastEditors: zhangl
 * @LastEditTime: 2020-04-26 23:23:59
 * @GitHub: https://github.com/SmithJson
 * @FilePath: /9.react-bike/src/index.js
 * @Description: 入口文件
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles/common.less';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
