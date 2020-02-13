/*
 * @Author: zhangl
 * @Date: 2020-02-13 21:01:24
 * @LastEditors  : zhangl
 * @LastEditTime : 2020-02-13 21:11:51
 * @GitHub: https://github.com/SmithJson
 * @FilePath: /FE-Subjects/前端算法/3.选择排序/index.js
 * @Description: 选择排序
 */
function compare(a, b) {
    return a < b;
}

function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function sort(arr) {
    for (var i = 0; i < arr.length; i++) {
        var maxIndex = 0;
        for (var j = 0; j < arr.length - i; j++) {
            if (compare(arr[maxIndex], arr[j])) {
                maxIndex = j;
            }
        }
        // maxIndex 对应的值，与数组倒数的 n 位置的数进行交换
        swap(arr, maxIndex, arr.length - 1 - i);
    }
}

var arr = [4, 5, 1, 0, 9, 8, 10, 2];

sort(arr);

console.log(arr);
