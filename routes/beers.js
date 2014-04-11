'use strict';

var express = require('express'),
    router = express.Router(),
    beers = require('../controllers/beers');

router
  .param('id', beers.getId)
  .get('/', beers.index)
  .get('/new', beers.new)
  .post('/new', beers.create)
  .get('/:id', beers.show)
  .get('/:id/edit', beers.edit)
  .post('/:id/edit', beers.update)
  .get('/:id/delete', beers.delete);

module.exports = router;
