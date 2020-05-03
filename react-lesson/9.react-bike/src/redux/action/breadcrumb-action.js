/*
 * @Author: zhangl
 * @Date: 2020-05-03 13:37:42
 * @LastEditors: zhangl
 * @LastEditTime: 2020-05-03 13:51:08
 * @FilePath: /9.react-bike/src/redux/action/breadcrumb-action.js
 * @Description: 面包屑 acton
 */
// ====================================================== //
// ===================== action type ==================== //
// ====================================================== //
const CHANGE_BREADCRUMB = 'change_breadcrumb';

// ====================================================== //
// ======================= action ======================= //
// ====================================================== //
const createChangeBreadcrumbAction = data => ({
	type: CHANGE_BREADCRUMB,
	value: data,
});

export {
	CHANGE_BREADCRUMB,
	createChangeBreadcrumbAction,
};