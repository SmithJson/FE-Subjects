/*
 * @Author: zhangl
 * @Date: 2019-10-04 12:51:02
 * @LastEditors: zhangl
 * @LastEditTime: 2019-10-04 13:35:10
 * @Description: 介绍
 */

var s1 = new Set([1, 2, 3, 4]);
var s2 = new Set([2, 3, 5, 6]);

// union：并集
var union = [...s1, ...s2];

// intersection：交集
var intersection = new Set([...s1].filter(x => s2.has(x)));

// difference：差集
var difference = new Set([...s1].filter(x => !s2.has(x)));

var s3 = new WeakSet();
var key = {name: 'zhangl'};

s3.add(key);
s3.has(key);
