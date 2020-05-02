/*
 * @Author: zhangl
 * @Date: 2020-05-02 21:21:36
 * @LastEditors: zhangl
 * @LastEditTime: 2020-05-02 22:10:37
 * @FilePath: /9.react-bike/src/api/common.js
 * @Description: 公共接口
 */
import { Http } from '../tools';
import { AK } from '../config';

const weather_url = 'http://api.map.baidu.com/telematics/v3/weather';

// 获取百度天气
const getWeather = city => Http.jsonP(
	`${weather_url}?location=${encodeURIComponent(city)}&output=json&ak=${AK}`,
	'callback',
);

export {
	getWeather,
};