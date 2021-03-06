require('dotenv').config()
var express = require('express'),
  favicon = require('serve-favicon'),
  logger = require('morgan'),
  cookieParser = require('cookie-parser'),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose'),
  db = process.env.MONGO_URL,
  index = require('./routes/index'),
  users = require('./routes/users'),
  wisatas = require('./routes/wisata'),
  cors = require('cors')


mongoose.connection.openUri(db, (err) => {
  if (err) {
    console.log('database not connected')
  }
  else {
    console.log('database connected')
  }
})

app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors())

app.use('/', index);
app.use('/users', users);
app.use('/api/wisatas', wisatas);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
