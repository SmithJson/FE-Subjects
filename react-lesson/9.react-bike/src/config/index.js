/*
 * @Author: zhangl
 * @Date: 2020-04-29 10:51:03
 * @LastEditors: zhangl
 * @LastEditTime: 2020-04-29 15:19:28
 * @FilePath: /9.react-bike/src/config/index.js
 * @Description: Do not edit
 */

// ====================================================== //
// ====================== CONSTANT ====================== //
// ====================================================== //
const { NODE_ENV } = process.env;
export const ENV = NODE_ENV === 'development' ? 'dev' : 'prod';


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
