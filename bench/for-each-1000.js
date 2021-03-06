'use strict';

var fast = require('../'),
    underscore = require('underscore'),
    lodash = require('lodash'),
    history = require('../test/history'),
    utils = require('./utils');

global.BENCH_ACC = 0;
var fns = utils.fns('item', 'global.BENCH_ACC += item');

var input = [];

for (var i = 0; i < 1000; i++) {
  input.push(i);
}

exports['Array::forEach()'] = function () {
  global.BENCH_ACC = 0;
  input.forEach(fns());
};

exports['fast.forEach()'] = function () {
  global.BENCH_ACC = 0;
  fast.forEach(input, fns());
};

exports['underscore.forEach()'] = function () {
  global.BENCH_ACC = 0;
  underscore.forEach(input, fns());
};

exports['lodash.forEach()'] = function () {
  global.BENCH_ACC = 0;
  lodash.forEach(input, fns());
};

exports['For Loop'] = function () {
  global.BENCH_ACC = 0;
  for (var i=0; i<input.length; i++) {
    global.BENCH_ACC += input[i];
  }
};

exports['For Loop +='] = function () {
  global.BENCH_ACC = 0;
  for (var l=0; l<input.length; l+=1) {
    global.BENCH_ACC += input[l];
  }
};

  exports['For Loop Cached'] = function () {
    global.BENCH_ACC = 0;
    for (var j=0, m=input.length; j<m; j++) {
      global.BENCH_ACC += input[j];
    }
  };

    exports['For Loop Cached +='] = function () {
      global.BENCH_ACC = 0;
      for (var k=0, m=input.length; k<m; k+=1) {
        global.BENCH_ACC += input[k];
      }
    };

    exports['For Loop Not Equal'] = function () {
      global.BENCH_ACC = 0;
      for (var n=0, m=input.length; n!==m; n+=1) {
        global.BENCH_ACC += input[n];
      }
    };

    exports['While Loop'] = function () {
      global.BENCH_ACC = 0;
      var n = input.length;
      while (n--) {
        global.BENCH_ACC += input[n];
      }
    };

    exports['While Loop -='] = function () {
      global.BENCH_ACC = 0;
      var m = input.length;
      while (m) {
        global.BENCH_ACC += input[m];
        m -= 1;
      }
};

  exports['For Loop Cached Pre Inc'] = function () {
    global.BENCH_ACC = 0;
    for (var j=0, m=input.length; j<m; ++j) {
      global.BENCH_ACC += input[j];
    }
  };
