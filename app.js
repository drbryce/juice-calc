var express = require('express');
var cors = require('cors');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');
process.env.SECRET_KEY = 'supersecretkey';
var index = require('./routes/index');
var users = require('./routes/users');
var flavor = require('./routes/flavor');
var recipe = require('./routes/recipe');
var brand = require('./routes/brand');

var app = express();

//mongoose connection
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/juice_calc');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error: '));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//globals
app.use(function (req, res, next) {
  res.locals.user = req.user || null;
  next();
});

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.options('*', cors());


app.use('/', index);
app.use('/users', users);
app.use('/flavor', flavor);
app.use('/recipe', recipe);
app.use('/brand', brand);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found' + req.url);
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
