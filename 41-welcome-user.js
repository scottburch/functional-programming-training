var log = require('./log');
var R = require('ramda');


var welcome = name => `Welcome, ${name}!`;

var welcomeUser = R.pipe(R.prop('firstName'), welcome);

var user = {firstName: 'Scott'};

// Works great!
log(  welcomeUser(user)  );

// user logs out
user = undefined;

// Not working so well :(
log(  welcomeUser(user)  );