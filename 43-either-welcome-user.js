var log = require('./log');
var M = require('simple-monads');
var R = require('ramda');


var welcome = name => `Welcome, ${name}!`;

var welcomeUser = R.pipe(R.prop('firstName'), welcome);

var user = {firstName: 'Scott'};

// Works great!
M.Either.of(user)
    .map(welcomeUser)
    .map(log);

// user logs out
user = undefined;

// Works like Maybe
M.Either.of(user)
    .map(welcomeUser)
    .map(log);


// Provides alternative message
M.Either.of(user)
    .map(welcomeUser)
    .orElse(R.always('Please log in'))
    .map(log);
