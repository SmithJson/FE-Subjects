/*
 * @Author: zhangl
 * @Date: 2020-05-02 22:35:41
 * @LastEditors: zhangl
 * @LastEditTime: 2020-05-02 23:32:22
 * @FilePath: /9.react-bike/src/tools/base.js
 * @Description: 基础工具
 */
import { TIME_REGEX } from '../config';
/**
 * 格式化时间
 * @param {Date} date
 * @param {String} regex 时间格式正则字符串，例如（YYYY-MM-DD HH:mm:ss）
 * @returns {String}
 */

const formatTime = (date, regex = TIME_REGEX) => {
	const time = new Date(date);
	return regex.replace(
		/(Y+)\1|(M+)\1|(D+)\1|(H+)\1|(m+)\1|(s+)\1/g,
		(match, $1, $2, $3, $4, $5, $6) => {
			if ($1) return time.getFullYear();
			else if ($2) return (time.getMonth() + 1).toString().padStart(2, '0');
			else if ($3) return time.getDate().toString().padStart(2, '0');
			else if ($4) return time.getHours().toString().padStart(2, '0');
			else if ($5) return time.getMinutes().toString().padStart(2, '0');
			else if ($6) return time.getSeconds().toString().padStart(2, '0');
			else return '';
		}
	);
};

export {
	formatTime,
};