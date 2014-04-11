'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var BeerSchema = new Schema({
  name: { type: String, default: '' },
  description: { type: String, default: '' },
  alcohol: { type: Number, min: 0 },
  style: { type: String, default: '' },
  brewery: { type: String, default: '' },
  category: { type: String, default: '' },
  country: { type: String, default: '' },
  created: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Beer', BeerSchema);
