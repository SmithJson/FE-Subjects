/*
 * @Author: zhangl
 * @Date: 2019-10-04 00:19:21
 * @LastEditors: zhangl
 * @LastEditTime: 2019-10-04 00:54:11
 * @Description: 介绍
 */
function combineFilter(config) {
    return function (data) {
        for (var prop in config) {
            data = config[prop](data, store.getState(prop));
        }
        return data;
    }
}

var lastFilterArr = combineFilter({
    text: filterArrByText,
    sex: filterArrBySex,
});