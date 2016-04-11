var log = require('./log');
var R = require('ramda');

var modulo = R.curry((divisor, dividend) => dividend % divisor);

var isOdd = modulo(2);

log(  isOdd(1)  );
log(  isOdd(2)  );