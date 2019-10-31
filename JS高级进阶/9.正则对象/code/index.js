/*
 * @Author: zhangl
 * @GitHub: https://github.com/SmithJson
 * @Date: 2019-10-30 11:16:25
 * @LastEditors: zhangl
 * @LastEditTime: 2019-10-31 12:11:03
 * @Description: 你好
 */
// $&
// var re = /hi/g;
// re.test('hi there hi');
// console.log(
//     RegExp.lastMatch, // 'hi'
//     RegExp['$&'], // 'hi'
// );

// $+
var re = /(hi)/g;
re.test('hi there!');

console.log(
    RegExp.lastParen, // 'hi'
    RegExp['$+'], // 'hi'
)

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
