/*
 * @Author: zhangl
 * @GitHub: https://github.com/SmithJson
 * @Date: 2019-10-30 11:16:25
 * @LastEditors: zhangl
 * @LastEditTime: 2019-11-01 11:52:28
 * @Description: 你好
 */
// global
// /foo/g.global; // true
// /foo/.global; // false

// flags
// /foo/ig.flags; // 'gi'
// /foo/.flags; // ' '
// /foo/muy.flags; // 'muy'

// $`
// var re = /world/g;
// re.test('hello world');
// console.log(
//     RegExp.leftContext, // hello
//     RegExp['$`'], // hello
// );


// dotAll (测试失败)
// var re = /./;
// re.test('\v');
// console.log(
//     re.dotAll,
// );

// $&
// var re = /hi/g;
// re.test('hi there hi');
// console.log(
//     RegExp.lastMatch, // 'hi'
//     RegExp['$&'], // 'hi'
// );

// $+
// var re = /(hi)/g;
// re.test('hi there!');

// console.log(
//     RegExp.lastParen, // 'hi'
//     RegExp['$+'], // 'hi'
// )

// $_
// var re = /hi/g;
// re.test('hi there');
// console.log(RegExp.input);

// re.test('foo');
// console.log(RegExp.$_);

// re.test('hi world');
// console.log(RegExp.$_);

// $n
// var re = /(\w+)\s(\w)/;
// var str = "Smith John";

// console.log(str.replace(re, '$2 $1')); // 'John Smith'
// console.log(
//     RegExp.$1, // Smith
//     RegExp.$2, // John
// );
