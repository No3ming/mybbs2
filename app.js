const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo/es5')(session)
const bodyParser = require('body-parser');
const mongodb = require('./mongodb/models/index');

const models = path.join(__dirname, 'mongodb/models');
const fs = require('fs');

const app = express();

//注册mongoose模型
fs.readdirSync(models)
  .filter(file => ~file.search(/^[^\.].*\.js$/))
  .forEach(file => require(path.join(models, file)));

const index = require('./routes/index');
const users = require('./routes/users');
const admin = require('./routes/admin');
const api = require('./routes/api');
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// session
app.use(session({
  secret: "what do you want to do?", //secret的值建议使用128个随机字符串
  cookie: {maxAge: 60 * 1000 * 60 * 24 * 14}, //过期时间
  resave: true, // 即使 session 没有被修改，也保存 session 值，默认为 true
  saveUninitialized: true,
  store: new MongoStore({
    mongooseConnection: mongodb.mongoose.connection //使用已有的数据库连接
  })
}))

app.use('/', index);
app.use('/users', users);
app.use('/admin', admin);
app.use('/api', api);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
