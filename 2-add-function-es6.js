var log = require('./log');

var add = a => b => a + b;

log(  add(1)(2)  );