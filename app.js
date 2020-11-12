var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var logger = require('morgan');


var usersRouter = require('./routes/users');
var homeRouter=require('./routes/home');
var loginRouter=require('./routes/login');
var registracionRouter=require('./routes/registracion');
var postRouter=require('./routes/post')
const db = require('./database/models');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session(
  { secret: 'proyecto_integrador',
    resave: false,
    saveUninitialized: true}
));
app.use(express.static(path.join(__dirname, 'public')));

//para hacer cosas en todas las vistas
app.use(function(req, res, next){
  if(req.session.userLogueado != undefined){
  res.locals.user=req.session.userLogueado;
  return next()
  }
  return next();
})

app.use(function(req, res, next){
  if (req.cookies.userId != undefined && req.session.userLogueado == undefined){
    db.User.findByPk(req.cookies.userId)
      .then(function(user){
        req.session.userLogueado=user;
        res.locals.userLogueado=user;
        //res.redirect(req.originalUrl)
        return next()
      })
      .catch(function(error){
        console.log(error)
      })
  } else {
    return next()
  }
})

app.use('/users', usersRouter);
app.use('/post', postRouter);
app.use('/home', homeRouter);
app.use('/login', loginRouter);
app.use('/registracion', registracionRouter);

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
