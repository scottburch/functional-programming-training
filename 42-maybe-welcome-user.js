var log = require('./log');
var M = require('simple-monads');
var R = require('ramda');


var welcome = name => `Welcome, ${name}!`;

var welcomeUser = R.pipe(R.prop('firstName'), welcome);

var user = {firstName: 'Scott'};

// Works great!
M.Maybe.of(user).map(welcomeUser).map(log)  ;

// user logs out
user = undefined;

// No error!!!!!
M.Maybe.of(user).map(welcomeUser).map(log);