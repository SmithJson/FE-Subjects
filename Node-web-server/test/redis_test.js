/*
 * @Author: zhangl
 * @Date: 2020-02-01 00:55:22
 * @GitHub: https://github.com/SmithJson
 * @LastEditors  : zhangl
 * @LastEditTime : 2020-02-01 01:05:52
 * @Description: Do not edit
 * @FilePath: /FE-Subjects/Node-web-server/test/redis_test.js
 */
const redis = require('redis');

// 创建客户端
const redisClient = redis.createClient(6379, '127.0.0.1');
redisClient.on('error', err => console.error(err));

// 测试
redisClient.set('myname', 'zhangl', redis.print);
redisClient.get('myname', (err, value) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(value);

    // 退出
    redisClient.quit();
});
