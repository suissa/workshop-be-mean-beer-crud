'use strict';

var mongoose = require('mongoose'),
    Beer = mongoose.model('Beer');

exports.getId = function(req, res, next, id) {
  req.id = id;
  next();
};

exports.index = function(req, res, next) {
  Beer.find(function (err, beers) {
    if (err) return next(err);
    res.json(beers);
  });
};

exports.show = function(req, res, next) {
  Beer.findOne({ _id: req.id }, function (err, beers) {
    if (err) return next(err);
    res.json(beers);
  });
};

exports.create = function(req, res, next) {
  var model = new Beer(req.body);

  model.save(function(err, data) {
    if (err) return next(err);
    res.send('Cerveja criada com sucesso');
  });
};

exports.update = function(req, res, next) {
  Beer.update({ _id: req.id }, req.body, function(err, data) {
    if (err) return next(err);
    res.send('Cerveja atualizada com sucesso');
  });
};

exports.delete = function(req, res, next) {
  Beer.remove({ _id: req.id }, function (err, data) {
    if (err) return next(err);
    res.send('Cerveja deletada com sucesso');
  });
};
