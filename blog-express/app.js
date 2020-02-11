/*
 * @Author: zhangl
 * @Date: 2020-02-11 19:26:38
 * @LastEditors  : zhangl
 * @LastEditTime : 2020-02-11 21:37:02
 * @GitHub: https://github.com/SmithJson
 * @FilePath: /FE-Subjects/blog-express/app.js
 * @Description: Do not edit
 */
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var blogRouter = require('./routes/blog');
var userRouter = require('./routes/user');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev')); // 打印日志
app.use(express.json()); // 处理 post application/json 传递的数据
app.use(express.urlencoded({ extended: false })); // 处理 post，其他Content-Type 传递的数据
app.use(cookieParser()); // 处理 cookie
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/blog', blogRouter);
app.use('/api/user', userRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'dev' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
