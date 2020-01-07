# Node 基础 {ignore=true}

[toc]

## 特性

1. 单线程
2. 异步 I/O
3. 事件与回调函数（事件驱动）

## OS

```javascript
const os = require('os');

function showNUM() {
    const mem = os.freemem() / os.totalmem() * 100;

    console.log(`内存占用率：${mem.toFixed(2)}`);
}

function showCpu() {
    const cpuStat = require('cpu-stat');

    cpuStat.usagePercent((err, percent) => {
        console.log(`cpu占用率：${percent.toFixed(2)}`);
    });
}

showNUM();
showCpu();
```

## fs

async ... await 只能作用于 promise 对象

```javascript
const fs = require('fs');

// 文件同步读取
const data = fs.readFileSync('./data.txt', {
    encoding: 'utf-8',
});

console.log(data);

// 文件异步读取
fs.readFile('./data.txt', { encoding: 'utf-8' }, (err, res) => {
    console.log(res);
});
```

## promise化

```javascript
// const fs = require('fs');

// promise化
// 方法一
// const promisify = function (fn) {
//     return function () {
//         const args = Array.from(arguments);

//         return new Promise(function (resolve, reject) {
//             args.push(function (err, data) {
//                 if (err) reject(err);
//                 else resolve(data);
//             });
//             fn.apply(null, args);
//         });
//     };
// };

// 方法二
// const { promisify } = require('util');

// const readFile = promisify(fs.readFile);

// 方法三
const { readFile } = require('fs').promises;

readFile('./data.txt', { encoding: 'utf-8' })
    .then(res => {
        console.log(res)
    })
    .catch(err => {
        console.log(err);
    });

(async () => {
    const data = await readFile('./data.txt', { encoding: 'utf-8' });
    console.log(data);
})()
```

## buffer

```javascript
// const buffer1 = new Buffer([1, 2, 3]);
const buffer1 = Buffer.alloc(10);
console.log(buffer1);
const buffer2 = Buffer.from([3, 4, 5]);
console.log(buffer2);
buffer2.write('hello');
const buffer3 = Buffer.concat([buffer1, buffer2]);
console.log(buffer3);
```

## http

```javascript
const http = require('http');

// 创建 http 服务
const app = http.createServer((request, response) => {
    const {
        url,
        method,
        headers,
    } = request;

    response.statusCode = 200;
    response.setHeader('Content-Type', 'application/json');

    if (url === '/' && method === 'GET') {
        response.write(JSON.stringify({
            name: 'zhangl',
            age: 11,
        }));
    }

    response.end();
});

// 监听所有网络请求
// app.on('request', (req, res) => {});

app.listen(3000, () => {
    console.log(`http://127.0.0.1 is running`);
});
```

## EventEmitter

```javascript

```