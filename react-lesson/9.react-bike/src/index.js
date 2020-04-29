/*
 * @Author: zhangl
 * @Date: 1985-10-26 16:15:00
 * @LastEditors: zhangl
 * @LastEditTime: 2020-04-29 20:33:56
 * @GitHub: https://github.com/SmithJson
 * @FilePath: /9.react-bike/src/index.js
 * @Description: 入口文件
 */
import React from 'react';
import ReactDOM from 'react-dom';
import Routers from './routers';
import './styles/common.less';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<Routers />,
	document.getElementById('root')
);

serviceWorker.unregister();
