var log = require('./log');
var R = require('ramda');

var fullName = R.curry((first, last) => `${first} ${last}`);

log( fullName('Bill', 'Jefferson'));

var billSomething = fullName('Bill');

log(  billSomething('Cosby')  );