/*
 * @Author: zhangl
 * @Date: 2019-10-18 00:02:16
 * @LastEditors: zhangl
 * @LastEditTime: 2019-10-18 00:26:35
 * @Description: 流操作
 */
var fs = require('fs');
var count = 1;

// 创建读取流（分段读取，默认最大为64KB）
var rs = fs.createReadStream('./demo/data.txt', {
    encoding: 'utf-8',
    highWaterMark: 8, // 分段读取最大值
});

// 分段读取数据（手动版的rs.on('data')）
// rs.on('readable', function () {
//     // 每次可以读取数据时，我们需要手动调用读取函数
//     var data = rs.read();

//     console.log('第' + count + '次读取内容为:' + data);
//     count++;
// });


// 分段读取数据
rs.on('data', function (data) {
        console.log('第' + count + '次读取内容为:' + data);
        count += 1;
});

// 流读取中断
rs.pause();

setTimeout(function () {
    // 流开始读取
    rs.resume();
} ,1000);

// 文件读取完成
rs.on('end', function () {
    console.log('读取完毕')
});