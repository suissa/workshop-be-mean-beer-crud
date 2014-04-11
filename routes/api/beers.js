'use strict';

var express = require('express'),
    router = express.Router(),
    beers = require('../../controllers/api/beers');

router
  .param('id', beers.getId)
  .get('/', beers.index)
  .post('/', beers.create)
  .get('/:id', beers.show)
  .put('/:id', beers.update)
  .delete('/:id', beers.delete);

module.exports = router;
