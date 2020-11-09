var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var detalleUsuarioRouter=require('./routes/detalleUsuario');
var homeRouter=require('./routes/home');
var loginRouter=require('./routes/login');
var miPerfilRouter=require('./routes/miPerfil');
var registracionRouter=require('./routes/registracion');
var resultadoBusquedaRouter=require('./routes/resultadoBusqueda');
var postRouter=require('./routes/post')


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/post', postRouter);
//app.use('/agregarPost', agregarPostRouter);
//app.use('/detallePost', detallePostRouter);
//app.use('/detalleUsuario', detalleUsuarioRouter);
app.use('/home', homeRouter);
app.use('/login', loginRouter);
//app.use('/miPerfil', miPerfilRouter);
app.use('/registracion', registracionRouter);
//app.use('/resultadoBusqueda', resultadoBusquedaRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
