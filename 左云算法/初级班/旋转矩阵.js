/*
 * @Author: zhangl
 * @Date: 2020-03-24 19:42:46
 * @LastEditors: zhangl
 * @LastEditTime: 2020-03-24 22:31:21
 * @GitHub: https://github.com/SmithJson
 * @FilePath: /FE-Subjects/左云算法/初级班/旋转矩阵.js
 * @Description: 旋转矩阵
 */
// [
//     [7, 4, 1],
//     [8, 5, 2],
//     [9, 6, 3]
// ]
var matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// [
//     [15, 13, 2, 5],
//     [14, 3, 4, 1],
//     [12, 6, 8, 9],
//     [16, 7, 10, 11]
// ]
var matrix2 = [
    [5, 1, 9, 11],
    [2, 4, 8, 10],
    [13, 3, 6, 7],
    [15, 14, 12, 16]
];

var rotateEdge = function (matrix, tR, tC, dR, dC) {
    var times = dC - tC;
    var temp = 0;
    for (var i = 0; i !== times; i++) {
        temp = matrix[tR][tC + i];
        matrix[tR][tC + i] = matrix[dR - i][tC];
        matrix[dR - i][tC] = matrix[dR][dC - i];
        matrix[dR][dC - i] = matrix[tR + i][dC];
        matrix[tR + i][dC] = temp;
    }
};

var rotate = function (matrix) {
    var tR = 0;
    var tC = 0;
    var dR = matrix.length - 1;
    var dC = matrix[0].length - 1;
    while (tR < dR) {
        rotateEdge(matrix, tR++, tC++, dR--, dC--);
    }
};

rotate(matrix);
console.log(matrix)

rotate(matrix2);
console.log(matrix2)