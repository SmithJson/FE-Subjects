/*
 * @Author: zhangl
 * @Date: 2020-02-13 21:43:30
 * @LastEditors  : zhangl
 * @LastEditTime : 2020-02-14 02:58:40
 * @GitHub: https://github.com/SmithJson
 * @FilePath: /FE-Subjects/前端算法/4.快速排序/标准版.js
 * @Description: 标准快速排序
 */
function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

// var arr = [4, 1, 6, 9, 3, 2, 8, 7];
var arr = [4, 1, 9, 6, 2, 3, 7, 8];

function quickSort2(arr, begin, end) {
    if (begin >= end - 1) {
        return;
    }
    var left = begin;
    var right = end;
    do {
        do {
            left++;
        } while (left < right && arr[left] < arr[begin]);
        do {
            right--;
        } while (right > left && arr[right] > arr[begin]);
        if (left < right) {
            swap(arr, left, right);
        }
    } while(left < right);
    var startPoint = left === right ? right - 1 : right;
    swap(arr, begin, startPoint);
    quickSort2(arr, begin, startPoint);
    quickSort2(arr, startPoint + 1, end);
}

function quickSort(arr) {
    quickSort2(arr, 0, arr.length);
}

quickSort(arr);

console.log(arr);
