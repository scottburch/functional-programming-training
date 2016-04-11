var log = require('./log');

var add = a => b => a + b;

var add3 = add(3);

log(  add3(2)  );