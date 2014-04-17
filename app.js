'use strict';

var express = require('express'),
    path = require('path'),
    favicon = require('static-favicon'),
    logger = require('morgan'),

    mongoose = require('mongoose'),
    BeerModel = require('./models/beer'),

    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    routes = require('./routes/index'),
    beers = require('./routes/beers'),

    api = {
      beers: require('./routes/api/beers')
    },

    app = express();


var methodOverride = require('method-override');   

// ----------------------------------------------------------------------------
//  Views Engine
// ----------------------------------------------------------------------------

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// ----------------------------------------------------------------------------
//  App Enviroments
// ----------------------------------------------------------------------------

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(methodOverride());                        
app.use(cookieParser());
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/beers', beers);

// API
app.use('/api/beers', api.beers);

/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// ----------------------------------------------------------------------------
//  Errors Handlers
// ----------------------------------------------------------------------------

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });

  app.locals.pretty = true;
  mongoose.connect('mongodb://localhost/workshop-floripa');
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;
