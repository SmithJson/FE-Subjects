/*
 * @Author: zhangl
 * @Date: 2020-02-13 21:13:01
 * @LastEditors  : zhangl
 * @LastEditTime : 2020-02-13 21:42:44
 * @GitHub: https://github.com/SmithJson
 * @FilePath: /FE-Subjects/前端算法/4.快速排序/简单版.js
 * @Description: 简单快速排序
 */
var arr = [4, 5, 1, 0, 9, 8, 10, 2];

function quickSort(arr) {
    if (arr == null || arr.length === 0) {
        return [];
    }
    var leader = arr[0];
    var left = [];
    var right = [];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > leader) {
            right.push(arr[i]);
        } else {
            left.push(arr[i]);
        }
    }
    left = quickSort(left);
    right = quickSort(right);
    left.push(leader);
    return left.concat(right);
}

console.log(quickSort(arr));
