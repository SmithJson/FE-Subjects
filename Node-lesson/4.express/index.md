# express {ignore=true}

[toc]

## express 试用

```javascript
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    console.log(res)
    res.end('<h1>Hello Wolrd!</h1>');
});

app.listen(3000, () => console.log('server is running'));
```

## route

路由

简化一个请求接口，不同请求方式的情况

```javascript
const app = express();

app
    .route('/info')
    .put((req, res) => {
        res.end('<h1>Put Request</h1>');
    })
    .get((req, res) => {
        res.end('<h1>Get Request</h1>');
    })
    .post((req, res) => {
        res.end('<h1>Post Request</h1>');
    });

app.listen(3000, () => console.log('server is running'));
```

## router

路由器

```javascript
// index.js
const express = require('express');
const birds = require('./birds');

const app = express();

// 使用 router 中间件，访问 '/birds/home' 接口
app.use('/birds', birds);

app.listen(3000, () => console.log('server is running'));

// birds.js
const express = require('express');

const router = express.Router();

// 请求时间显示中间件
router.use((req, res, next) => {
    console.log(`Date ${Date.now()}`);
    next();
});

router
    .route('/home')
    .get((req, res) => {
        res.json({
            home: 'Birds home page',
        });
    });

router.get('/about', (req, res) => {
    res.json({
        home: 'About page',
    });
});

module.exports = router;
```

## static

静态资源管理

当出现多个静态目录时，对于重名的文件选择第一个静态目录下的该文件

```javascript
const express = require('express');
const birds = require('./birds');

const app = express();

// 将 public 作为静态资源根目录，在客户端使用 localhost:3000/访问文件名即可.后缀名
app.use(express.static('./public'));
app.listen(3000, () => console.log('server is running'));
```

## 查看全局 NPM 包的位置

```bash
npm root -g
```
