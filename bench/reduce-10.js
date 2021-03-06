var fast = require('../'),
    underscore = require('underscore'),
    lodash = require('lodash'),
    history = require('../test/history'),
    utils = require('./utils');

var fns = utils.fns('last', 'item', 'return last * item + Math.random()');

var input = [1,2,3,4,5,6,7,8,9,10];

exports['Array::reduce()'] = function () {
  return input.reduce(fns(), 0);
};

exports['fast.reduce()'] = function () {
  return fast.reduce(input, fns(), 0);
};












exports['underscore.reduce()'] = function () {
  return underscore.reduce(input, fns(), 0)
};

exports['lodash.reduce()'] = function () {
  return lodash.reduce(input, fns(), 0)
};

