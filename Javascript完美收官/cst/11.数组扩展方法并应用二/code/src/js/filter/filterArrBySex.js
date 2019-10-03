/*
 * @Author: zhangl
 * @Date: 2019-10-04 00:20:43
 * @LastEditors: zhangl
 * @LastEditTime: 2019-10-04 00:21:10
 * @Description: 根据性别过滤
 */
function filterArrBySex(data, sex) {
    if (sex === 'all') {
        return data;
    } else {
        return data.filter(function (ele, index, self) {
            return ele.sex === sex;
        });
    }
}