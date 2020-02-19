/*
 * @Author: zhangl
 * @Date: 2020-02-19 20:05:37
 * @LastEditors: zhangl
 * @LastEditTime: 2020-02-20 00:19:46
 * @GitHub: https://github.com/SmithJson
 * @FilePath: /FE-Subjects/前端算法/6.图/克鲁斯卡尔算法.js
 * @Description: 克鲁斯卡尔（Kruskal）算法
 *
 * 1. 选择最短的边进行连接
 * 2. 要保证连接的两端至少有一个点是新的点
 * 3. 或者这个边是将两个部落进行连接的
 * 4. 重复 1-3 直到将所有的点都连接到一起
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

var pointSet = [];
var edgeSet = [
    [0, 4, 7, MAX, MAX], // A
    [4, 0, 8, 6, MAX], // B
    [7, 8, 0, 5, MAX], // C
    [MAX, 6, 5, 0, 7], // D
    [MAX, MAX, MAX, 7, 0], // E
];
var MAX = 2 ** 53;

pointSet.push(a);
pointSet.push(b);
pointSet.push(c);
pointSet.push(d);
pointSet.push(e);

function link(linkList, begin, end) {
    var beginIn = null;
    var endIn = null
    for (var i = 0; i < linkList.length; i++) {
        if (linkList[i].indexOf(begin) > -1) {
            beginIn = linkList[i];
        }
        if (linkList[i].indexOf(end) > -1) {
            endIn = linkList[i];
        }
    }
    if (beginIn === null && endIn === null) {
        var newNode = [begin, end];
        linkList.push(newNode);
    } else if (beginIn !== null && endIn === null) {
        beginIn.push(end);
    } else if (beginIn === null && endIn !== null) {
        endIn.push(begin);
    } else if (beginIn !== null && endIn !== null && beginIn !== endIn) {
        var newNode = beginIn.concat(endIn);
        linkList.push(newNode);
        var index = linkList.indexOf(beginIn);
        linkList.splice(index, 1);
        index = linkList.indexOf(endIn);
        linkList.splice(index, 1);
    }
    begin.neighbor.push(end);
    end.neighbor.push(begin);
}

function checkLink(linkList, begin, end) {
    var beginIn = null;
    var endIn = null
    for (var i = 0; i < linkList.length; i++) {
        if (linkList[i].indexOf(begin) > -1) {
            beginIn = linkList[i];
        }
        if (linkList[i].indexOf(end) > -1) {
            endIn = linkList[i];
        }
    }
    if (beginIn !== null && endIn !== null && beginIn === endIn) {
        return false;
    }
    return true;
}

function krsukal(pointSet, edgeSet) {
    var linkList = [];
    while (true) {
        var begin = null;
        var end = null;
        var minDistance = MAX;
        for (var i = 0; i < edgeSet.length; i++) {
            for (var j = 0; j < edgeSet[i].length; j++) {
                var tempBegin = pointSet[i];
                var tempEnd = pointSet[j];
                if (i !== j && edgeSet[i][j] < minDistance &&
                    checkLink(linkList, tempBegin, tempEnd)) {
                        begin = tempBegin;
                        end = tempEnd;
                        minDistance = edgeSet[i][j];
                }
            }
        }
        link(linkList, begin, end);
        if (linkList.length === 1 && linkList[0].length === pointSet.length) {
            break;
        }
    }
}

krsukal(pointSet, edgeSet);

console.log(pointSet);
