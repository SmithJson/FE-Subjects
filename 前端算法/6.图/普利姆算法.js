/*
 * @Author: zhangl
 * @Date: 2020-02-18 23:48:16
 * @LastEditors: zhangl
 * @LastEditTime: 2020-02-19 21:06:09
 * @GitHub: https://github.com/SmithJson
 * @FilePath: /FE-Subjects/前端算法/6.图/普利姆算法.js
 * @Description: 最小生成树-普利姆（Prim）算法
 *
 * 1. 随机选择一个节点为起点
 * 2. 找到与一条与选中节点相连的且最短的边
 * 3. 如果这条边的另一个节点是为连接的点，那么直接相连
 * 4. 如果是已经连接过的，那么选择倒数第二短的边相连
 * 5. 重复 1，2，3，4 步骤，直到找到符合条件的
 */
function Node(value) {
    this.value = value;
    this.neighbor = [];
}

var a = new Node('A');
var b = new Node('B');
var c = new Node('C');
var d = new Node('D');
var e = new Node('E');

var MAX = 2 ** 53;
var pointSet = [];
var edgeSet = [
    [0, 4, 7, MAX, MAX], // A
    [4, 0, 8, 6, MAX], // B
    [7, 8, 0, 5, MAX], // C
    [MAX, 6, 5, 0, 7], // D
    [MAX, MAX, MAX, 7, 0], // E
];

pointSet.push(a);
pointSet.push(b);
pointSet.push(c);
pointSet.push(d);
pointSet.push(e);

function getIndex(value) {
    for (var i = 0; i < pointSet.length; i++) {
        if (pointSet[i].value === value) {
            return i;
        }
    }
    return -1;
}

function getMinDisNode(pointSet, edgeSet, nowPointSet) {
    var fromNode = null;
    var minDisNode = null;
    var minDistance = MAX;
    for (var i = 0; i < nowPointSet.length; i++) {
        var index = getIndex(nowPointSet[i].value);
        for (var j = 0; j < edgeSet[index].length; j++) {
            var currentNode = pointSet[j];
            if (nowPointSet.indexOf(currentNode) < 0 && edgeSet[index][j] < minDistance) {
                fromNode = nowPointSet[i];
                minDisNode = currentNode;
                minDistance = edgeSet[index][j];
            }
        }
    }
    fromNode.neighbor.push(minDisNode);
    minDisNode.neighbor.push(fromNode);
    return minDisNode;
}

function prim(pointSet, edgeSet, startNode) {
    var nowPointSet = [];
    nowPointSet.push(startNode);
    while (true) {
        var minDisNode = getMinDisNode(pointSet, edgeSet, nowPointSet);
        nowPointSet.push(minDisNode);
        if (pointSet.length === nowPointSet.length) {
            break;
        }
    }
}

prim(pointSet, edgeSet, pointSet[2]);

console.log(pointSet);
