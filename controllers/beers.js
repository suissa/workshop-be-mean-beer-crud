'use strict';

var mongoose = require('mongoose'),
    Beer = mongoose.model('Beer');

exports.getId = function(req, res, next, id) {
  req.id = id;
  next();
};

exports.index = function(req, res, next) {
  console.log(req);

  Beer.find(function(err, beers) {
    if (err) return next(err);
    res.render('beers/index', {
      title: 'Beers',
      beers: beers
    });
  });
};

exports.show = function(req, res, next) {
  Beer.findOne({ _id: req.id }, function (err, beer) {
    if (err) return next(err);
    res.render('beers/show', {
      beer: beer,
      title: beer.name
    });
  });
};

exports.new = function(req, res) {
  res.render('beers/new', { title: 'Creating Beer' });
};

exports.create = function(req, res, next) {
  var model = new Beer(req.body);

  model.save(function (err, data) {
    if (err) return next(err);
    res.redirect('/beers');
  });
};

exports.edit = function(req, res) {
  Beer.findOne({ _id: req.id }, function(err, beer) {
    res.render('beers/edit', {
      beer: beer,
      title: 'Editing ' + beer.name
    });
  });
};

exports.update = function(req, res, next) {
  Beer.update({ _id: req.id }, req.body, function(err, data) {
    if (err) return next(err);
    res.redirect('/beers/' + req.id);
  });
};

exports.delete = function(req, res, next) {
  Beer.remove({ _id: req.id }, function(err, data) {
    if (err) return next(err);
    res.redirect('/beers');
  });
};
