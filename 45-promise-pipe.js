var log = require('./log');
var R = require('ramda');

var async1 = () => new Promise(
    resolve => setTimeout(() => resolve("async1"))
);

var sync1 = x => `${x}:sync1`;

var sync2 = x => `${x}:sync2`;

var async2 = x => new Promise(
    resolve => setTimeout(() => resolve(`${x}:async2`))
);

var doAll = R.pipeP(async1, sync1, sync2, async2);

doAll().then(log);