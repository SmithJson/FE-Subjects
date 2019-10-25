/*
 * @Author: zhangl
 * @Date: 2019-10-25 23:07:29
 * @LastEditors: zhangl
 * @LastEditTime: 2019-10-26 01:21:04
 * @Description: 介绍
 */
function xmlAjax(options) {
    return new Promise(function (resolve, reject) {
        var defaultOptions = {
            method: 'GET',
            url: '',
            data: null,
            async: true,
            ContentType: 'application/json;charset=UTF-8',
            done: function () {},
            fail: function () {},
        };

        var newOptions = Object.assign({}, defaultOptions, options);
        var isGet = newOptions.method.toUpperCase() === 'GET';
        var xhr = new XMLHttpRequest();

        if (isGet && newOptions.data) {
            var str = '';

            for (var key in newOptions.data) {
                str += key + '=' + newOptions.data[key] + '&';
            }

            str = str.substring(0, str.length - 1);
            newOptions.url += '?' + str;
        }

        xhr.open(newOptions.method, newOptions.url, newOptions.async);
        xhr.setRequestHeader('Content-Type', newOptions.ContentType);

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    var resp = JSON.parse(xhr.responseText);

                    resolve(resp);
                    newOptions.done(resp);
                } else {
                    reject('error');
                    newOptions.fail(xhr.responseText);
                }
            }
        };

        if (isGet) {
            xhr.send(null);
        } else {
            if (newOptions.data) {
                var dataParam = JSON.stringify(newOptions.data);
                xhr.send(dataParam);
            } else {
                xhr.send(null);
            }
        }
    });
}