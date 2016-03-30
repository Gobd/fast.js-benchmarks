var fast = require('../'),
    underscore = require('underscore'),
    lodash = require('lodash'),
    history = require('../test/history'),
    utils = require('./utils');

var fns = utils.fns('item', 'return item * item + Math.random()');
var input = [1,2,3];

exports['Array::map()'] = function () {
  return input.map(fns());
};

exports['fast.map()'] = function () {
  return fast.map(input, fns());
};







exports['underscore.map()'] = function () {
  return underscore.map(input, fns());
};

exports['lodash.map()'] = function () {
  return lodash.map(input, fns());
};
