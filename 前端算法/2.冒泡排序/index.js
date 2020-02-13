/*
 * @Author: zhangl
 * @Date: 2020-02-13 20:19:38
 * @LastEditors  : zhangl
 * @LastEditTime : 2020-02-13 20:32:03
 * @GitHub: https://github.com/SmithJson
 * @FilePath: /FE-Subjects/前端算法/2.冒泡排序/index.js
 * @Description: 冒泡排序
 */
function compare(a, b) { // 比较是否需要交换
    return a > b;
}

function swap(arr, i, j) { // 将数组中的 i, j 位置进行值的交换
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function sort(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length - 1 - i; j++) {
            if (compare(arr[j], arr[j + 1])) {
                swap(arr, j, j + 1);
            }
        }
    }
}

var arr = [4, 5, 1, 0, 9, 8, 10, 2];

sort(arr);

console.log(arr);