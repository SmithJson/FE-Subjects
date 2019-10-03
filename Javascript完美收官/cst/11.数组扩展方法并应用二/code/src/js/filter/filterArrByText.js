/*
 * @Author: zhangl
 * @Date: 2019-10-04 00:20:01
 * @LastEditors: zhangl
 * @LastEditTime: 2019-10-04 00:20:18
 * @Description: 根据文本过滤
 */
function filterArrByText(data, text) {
    if (!text) {
        return data;
    } else {
        return data.filter(function (ele, index) {
            return ele.name.indexOf(text) !== -1;
        });
    }
}