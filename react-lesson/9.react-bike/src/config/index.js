/*
 * @Author: zhangl
 * @Date: 2020-04-29 10:51:03
 * @LastEditors: zhangl
 * @LastEditTime: 2020-05-02 23:29:29
 * @FilePath: /9.react-bike/src/config/index.js
 * @Description: 常量配置
 */

// ====================================================== //
// ====================== CONSTANT ====================== //
// ====================================================== //
const { NODE_ENV } = process.env;
export const ENV = NODE_ENV === 'development' ? 'dev' : 'prod';
export const AK = '3p49MVra6urFRGOT9s8UBWr2'; // 百度 AK
export const TIME_REGEX = 'YYYY-MM-DD HH:mm:ss'; // 时间格式

// ====================================================== //
// ======================== Utils ======================= //
// ====================================================== //
const createRequestUrlByEnv = (
	{
		env = ENV,
		protocol = 'http',
		domain = 'localhost',
		port = 80,
		pathname = '',
	} = {}
	) => `${protocol}://${domain}:${port}/${env}/${pathname}`;

// ====================================================== //
// ========================= API ======================== //
// ====================================================== //
const URL = {
	port: 7300,
	env: 'mock',
	pathname: '5ea29f3676465c4649988023/adminCycle',
};

export const BASE_URL = createRequestUrlByEnv(URL);