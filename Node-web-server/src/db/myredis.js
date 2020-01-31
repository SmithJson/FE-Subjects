/*
 * @Author: zhangl
 * @Date: 2020-02-01 01:18:07
 * @GitHub: https://github.com/SmithJson
 * @LastEditors  : zhangl
 * @LastEditTime : 2020-02-01 01:26:46
 * @Description: redis 封装
 * @FilePath: /FE-Subjects/Node-web-server/src/db/myredis.js
 */
const redis = require('redis');
const { REDIS_CONNECTION } = require('../config/db');

const {
    port,
    host,
} = REDIS_CONNECTION;
const redisClinet = redis.createClient(port, host);
redisClient.on('error', err => console.error(err));

function set(key, value) {
    if (typeof value === 'object') {
        value = JSON.stringify(value);
    }
    redisClient.set(key, value, redis.print);
}

function get(key) {
    return new Promise((resolve, rejejct) => {
        redisClinet.get(key, (err, value) => {
            if (err) {
                rejejct(err);
                return
            }
            if (value === null) {
                resolve(null);
                return;
            }
            try {
                resolve(JSON.parse(value));
            } catch (error) {
                resolve(value);
            }
        });
    });
}

module.exports = {
    set,
    get,
};