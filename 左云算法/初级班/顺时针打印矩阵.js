/*
 * @Author: zhangl
 * @Date: 2020-03-23 21:53:25
 * @LastEditors: zhangl
 * @LastEditTime: 2020-03-24 00:35:48
 * @GitHub: https://github.com/SmithJson
 * @FilePath: /FE-Subjects/左云算法/初级班/顺时针打印矩阵.js
 * @Description: 顺时针打印矩阵
 */
// [1,2,3,6,9,8,7,4,5]
var matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// [1,2,3,4,8,12,11,10,9,5,6,7]
var matrix2 = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]];
// [1,2,3,4]
var matrix3 = [[1, 2, 3, 4]];
// [1,2,3,4]
var matrix4 = [[1], [2], [3], [4]];

var printEdge = function (matrix, tR, tC, bR, bC) {
    if (tR === bR) {
        for (var i = tC; i <= bC; i++) {
            console.log(matrix[tR][i]);
        }
    } else if (tC === bC) {
        for (var i = tR; i <= bR; i++) {
            console.log(matrix[i][tC]);
        }
    } else {
        var curR = tR;
        var curC = tC;
        while (curC !== bC) {
            console.log(matrix[tR][curC]);
            curC++;
        }
        while (curR !== bR) {
            console.log(matrix[curR][bC]);
            curR++;
        }
        while (curC !== tC) {
            console.log(matrix[bR][curC]);
            curC--;
        }
        while (curR !== tR) {
            console.log(matrix[curR][tC]);
            curR--;
        }
    }
}

var spiralOrder = function (matrix) {
    var tR = 0;
    var tC = 0;
    var bR = matrix.length - 1;
    var bC = matrix[0].length - 1;
    while (tR <= bR && tC <= bC) {
        printEdge(matrix, tR++, tC++, bR--, bC--); 
    }
};

console.log('============= first =============');
spiralOrder(matrix);
console.log('============= second =============');
spiralOrder(matrix2);
console.log('============= third =============');
spiralOrder(matrix3);
console.log('============= fourth =============');
spiralOrder(matrix4);
