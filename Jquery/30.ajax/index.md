# jQ 中的 ajax {ignore=true}

[toc]

## $.ajax

- 参数 object

```javascript
/**
 * 参数 obj
 *   url: 路径
 *   type: 请求方式
 *   data: 请求字段
 *   success: 请求成功后的回调函数
 *   error: 请求失败的回调函数
 *   complete: 请求无论失败 | 成功都回执行
 *   context: 改变函数上下文
 *   timeout: 请求时间
 *   async: true false 是否异步
 *   dataType: 'jsonp' 希望后端返回什么类型数据, jsonp 跨域访问
 */

$.ajax({
    url: 'http://rap2api.taobao.org/app/mock/236728/example/1573720711179',
    type: 'GET',
    data: {
        username: 'zhangl',
        password: '123456',
    },
    success: function (res) {
        console.log(res, this);
    },
    error: function (err) {
        console.log(err.status, err.statusText);
    },
    complete: function () {
        console.log('complete');
    },
    context: $('.demo'),
    async: true,
    dataType: 'jsonp',
});
```