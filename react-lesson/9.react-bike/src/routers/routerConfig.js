/*
 * @Author: zhangl
 * @Date: 2020-04-29 18:05:49
 * @LastEditors: zhangl
 * @LastEditTime: 2020-04-29 23:13:23
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
		icon: <HomeOutlined />,
	},
	{
		title: 'UI',
		key: '/ui',
		children: [
			{
				title: '按钮',
				key: '/ui/buttons',
				component: loadablePageComponent('/home'),
				auth: true,
				extract: true
			},
			{
				title: '弹框',
				key: '/ui/modals',
				component: loadablePageComponent('/home'),
				auth: true,
			},
			{
				title: 'Loading',
				key: '/ui/loadings',
				component: loadablePageComponent('/home'),
				auth: true,
			},
			{
				title: '通知提醒',
				key: '/ui/notification',
				component: loadablePageComponent('/home'),
				auth: true,
			},
			{
				title: '全局Message',
				key: '/ui/messages',
				component: loadablePageComponent('/permission'),
			},
			{
				title: 'Tab页签',
				key: '/ui/tabs',
				component: loadablePageComponent('/permission'),
			},
			{
				title: '图片画廊',
				key: '/ui/gallery',
				component: loadablePageComponent('/permission'),
			},
			{
				title: '轮播图',
				key: '/ui/carousel',
				component: loadablePageComponent('/permission'),
			}
		]
	},
	{
		key: '/form',
		title: '表单',
		children: [
			{
				key: '/form/login',
				title: '登录',
				component: loadablePageComponent('/home'),
				auth: true,
				show: true,
			},
			{
				key: '/form/register',
				title: '注册',
				component: loadablePageComponent('/home'),
				auth: true,
				show: true,
			},
		],
	},
	{
		title: '表格',
		key: '/table',
		children: [
			{
				title: '基础表格',
				key: '/table/basic',
				component: loadablePageComponent('/home'),
				auth: true,
			},
			{
				title: '高级表格',
				key: '/table/high',
				component: loadablePageComponent('/home'),
				auth: true,
			}
		]
	},
	{
		title: '城市管理',
		key: '/city',
		component: loadablePageComponent('/home'),
		auth: true,
	},
	{
		title: '订单管理',
		key: '/order',
		component: loadablePageComponent('/home'),
		auth: true,
	},
	{
		title: '员工管理',
		key: '/user',
		component: loadablePageComponent('/permission'),
	},
	{
		title: '车辆地图',
		key: '/bikeMap',
		component: loadablePageComponent('/permission'),
	},
	{
		key: '/permission',
		title: '权限设置',
		component: loadablePageComponent('/permission'),
		auth: true,
		show: true,
		icon: <ContactsOutlined />
	},
];
