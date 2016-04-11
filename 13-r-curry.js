var log = require('./log');
var R = require('ramda');


var add = (a, b) => a + b;

add = R.curry(add);

log(  add(1, 2)  );

var add3 = add(3);

log(  add3(5)  );
