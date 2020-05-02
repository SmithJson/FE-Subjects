/*
 * @Author: zhangl
 * @Date: 2020-04-29 18:05:49
 * @LastEditors: zhangl
 * @LastEditTime: 2020-05-03 01:26:20
 * @FilePath: /9.react-bike/src/routers/routerConfig.js
 * @Description: menu 路由
 */
import React from 'react';
import Loadable from 'react-loadable';
import { HomeOutlined, ContactsOutlined } from '@ant-design/icons';

const loadablePageComponent = path => Loadable({
	loader: () => import(`../pages${path}`),
	loading: '加载中...',
});

export const menuConfig = [
	{
		key: '/home',
		title: '首页',
		component: loadablePageComponent('/home'),
		auth: true, // 是否登录访问
		show: true, // 是否有权访问
		extract: true,
		icon: <HomeOutlined />,
	},
	{
		title: 'UI',
		key: '/ui',
		auth: true,
		show: true,
		extract: true,
		icon: <HomeOutlined />,
		children: [
			{
				title: '弹框',
				key: '/ui/modals',
				component: loadablePageComponent('/ui/modals'),
				auth: true,
				show: true,
				extract: true,
			},
			{
				title: 'Loading',
				key: '/ui/loadings',
				component: loadablePageComponent('/home'),
				auth: true,
				show: true,
				extract: true,
			}
		]
	},
	{
		key: '/form',
		title: '表单',
		icon: <HomeOutlined />,
		auth: true,
		show: true,
		children: [
			{
				key: '/form/login',
				title: '登录',
				component: loadablePageComponent('/home'),
				auth: true,
				show: true,
				extract: true,
			},
			{
				key: '/form/register',
				title: '注册',
				component: loadablePageComponent('/home'),
				auth: true,
				show: true,
				extract: true,
			},
		],
	},
	{
		title: '表格',
		key: '/table',
		icon: <HomeOutlined />,
		children: [
			{
				title: '基础表格',
				key: '/table/basic',
				component: loadablePageComponent('/home'),
				auth: true,
				show: true,
				extract: true,
			},
			{
				title: '高级表格',
				key: '/table/high',
				component: loadablePageComponent('/home'),
				auth: true,
				show: true,
				extract: true,
			}
		]
	},
	{
		title: '城市管理',
		key: '/city',
		component: loadablePageComponent('/home'),
		icon: <HomeOutlined />,
		auth: true,
		show: true,
		extract: true,
	},
	{
		title: '订单管理',
		key: '/order',
		component: loadablePageComponent('/home'),
		icon: <HomeOutlined />,
		auth: true,
		show: true,
		extract: true,
	},
	{
		key: '/permission',
		title: '权限设置',
		component: loadablePageComponent('/permission'),
		icon: <ContactsOutlined />,
		auth: true,
		show: true,
		extract: true,
	},
];
