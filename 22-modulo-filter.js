var log = require('./log');
var R = require('ramda');

var modulo = R.curry((divisor, dividend) => dividend % divisor);

var isOdd = modulo(2);

var getOdds = R.filter(isOdd);


log(  getOdds([1,2,3,4,5,6,7])  );