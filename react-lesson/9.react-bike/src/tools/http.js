/*
 * @Author: zhangl
 * @Date: 2020-05-02 17:13:37
 * @LastEditors: zhangl
 * @LastEditTime: 2020-05-03 11:34:28
 * @FilePath: /9.react-bike/src/tools/http.js
 * @Description: 接口请求工具
 */
import jsonp from 'jsonp';

class Http {

	/**
	 * get 方式跨域访问
	 * @param {String} url
	 * @param {String} param
	 * @returns {Promise}
	 */

	static jsonP(url, param) {
		return new Promise((resolve, reject) => {
			jsonp(url, { param },  (err, res) => {
				if (res.error === 0) resolve(res.results);
				else reject(err);
			});
		});
	};
};

export default Http;