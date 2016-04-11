var log = require('./log');
var R = require('ramda');

var add3 = R.add(3);

log(  add3(10)  );