/*
 * @Author: zhangl
 * @Date: 2019-10-25 23:07:44
 * @LastEditors: zhangl
 * @LastEditTime: 2019-10-26 01:21:36
 * @Description: ajax 实现服务器访问
 */
// 创建xhr 对象
// var xhr = new XMLHttpRequest();

// // 与服务器建立链接
// // method url async
// xhr.open('GET', 'http://127.0.0.1:3000/info', true);

// // 设置请求头
// xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');

// xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4) {
//         if (xhr.status === 200) {
//             var data = JSON.parse(xhr.responseText);
//             console.log(data)
//         }
//     }
// };

// // 发送数据
// xhr.send(null);

xmlAjax({
    url: 'http://127.0.0.1:3000/info',
    data: {
        username: 'zhangl',
        password: '123456',
    },
    done: function (data) {
        console.log(data);
    },
    fail: function (err) {
        console.log(err)
    }
}).then(function (data) {
    console.log(data, 1);
})