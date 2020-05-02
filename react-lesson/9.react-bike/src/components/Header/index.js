/*
 * @Author: zhangl
 * @Date: 2020-04-26 23:42:19
 * @LastEditors: zhangl
 * @LastEditTime: 2020-05-02 23:32:50
 * @GitHub: https://github.com/SmithJson
 * @FilePath: /9.react-bike/src/components/Header/index.js
 * @Description: Header
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import { getWeather } from '../../api';
import { formatTime } from '../../tools';
import './index.less';

export default class Header extends Component {
	state = {
		weather: {},
		time: '',
		username: '一叶小和尚',
	}

	componentDidMount() {
		// this.fetchWeather();
		const res = [
			{
				"currentCity": "北京",
				"pm25": "98",
				"index": [
					{
						"des": "天气炎热，建议着短衫、短裙、短裤、薄型T恤衫等清凉夏季服装。",
						"tipt": "穿衣指数",
						"title": "穿衣",
						"zs": "炎热"
							},
					{
						"des": "较适宜洗车，未来一天无雨，风力较小，擦洗一新的汽车至少能保持一天。",
						"tipt": "洗车指数",
						"title": "洗车",
						"zs": "较适宜"
							},
					{
						"des": "各项气象条件适宜，发生感冒机率较低。但请避免长期处于空调房间中，以防感冒。",
						"tipt": "感冒指数",
						"title": "感冒",
						"zs": "少发"
							},
					{
						"des": "天气较好，无雨水困扰，但考虑气温很高，请注意适当减少运动时间并降低运动强度，运动后及时补充水分。",
						"tipt": "运动指数",
						"title": "运动",
						"zs": "较不宜"
							},
					{
						"des": "紫外线辐射极强，建议涂擦SPF20以上、PA++的防晒护肤品，尽量避免暴露于日光下。",
						"tipt": "紫外线强度指数",
						"title": "紫外线强度",
						"zs": "很强"
							}
				],
				"weather_data": [
					{
						"date": "周六 05月02日 (实时：31℃)",
						"dayPictureUrl": "http://api.map.baidu.com/images/weather/day/qing.png",
						"nightPictureUrl": "http://api.map.baidu.com/images/weather/night/qing.png",
						"weather": "晴",
						"wind": "南风3-4级",
						"temperature": "32 ~ 17℃"
							},
					{
						"date": "周日",
						"dayPictureUrl": "http://api.map.baidu.com/images/weather/day/leizhenyu.png",
						"nightPictureUrl": "http://api.map.baidu.com/images/weather/night/leizhenyu.png",
						"weather": "雷阵雨",
						"wind": "东风3-4级",
						"temperature": "28 ~ 13℃"
							},
					{
						"date": "周一",
						"dayPictureUrl": "http://api.map.baidu.com/images/weather/day/duoyun.png",
						"nightPictureUrl": "http://api.map.baidu.com/images/weather/night/qing.png",
						"weather": "多云转晴",
						"wind": "西南风3-4级",
						"temperature": "22 ~ 11℃"
							},
					{
						"date": "周二",
						"dayPictureUrl": "http://api.map.baidu.com/images/weather/day/duoyun.png",
						"nightPictureUrl": "http://api.map.baidu.com/images/weather/night/duoyun.png",
						"weather": "多云",
						"wind": "西南风微风",
						"temperature": "26 ~ 13℃"
							}
				]
			}
		]
		setTimeout(() => {
			const [ weatherObj ] = res;
			const { currentCity, weather_data } = weatherObj;
			const [ weatherItem ] = weather_data;
			const { dayPictureUrl, weather, temperature } = weatherItem;
			this.setState({
				weather: {
					city: currentCity,
					png: dayPictureUrl,
					nowWeather: weather,
					temperature,
				},
			});
		}, 1500);
		this.getTime();
	}

	getTime = () => {
		setInterval(() => {
			const time = Date.now();
			this.setState({
				time: formatTime(time),
			});
		}, 1000);
	}

	fetchWeather = () => {
		getWeather('北京')
			.then(res => {
				console.log(res);
			});
	};

	render() {
		const { weather, time, username } = this.state;
		const { city, png, nowWeather, temperature} = weather;
		return (
			<header className="header">
				<div className="header-top-wrapper">
					<div className="header-top">
						<div className="user-tip">
							<div>欢迎，</div>
							<div className="user-name">{username}</div>
						</div>
						<Button type="link">退出</Button>
					</div>
				</div>
				<div className="breadcrumb-wrapper">
					<div className="breadcrumb">
						<Link to="/">首页</Link>
					</div>
					<div className="weather-wrapper">
						<div className="weather">
							<img className="weather-icon" src={png} alt="" />
							<div>
								<span>{nowWeather}</span>
								<span>{city}</span>
								<span>{temperature}</span>
							</div>
						</div>
						<div className="time">{time}</div>
					</div>
				</div>
			</header>
		);
	}
};