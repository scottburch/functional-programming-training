var log = require('./log');
var R = require('ramda');

var getUsers = () =>
    new Promise(resolve => setTimeout(() => resolve([{username: 'Scott'}, {username: 'Jim'}])));

var storeUsers = users =>
    new Promise(resolve => setTimeout(() => resolve(users)));

var standardLens = prop => R.lens(R.prop(prop), R.assoc(prop));

var uppercaseUsername = R.over(standardLens('username'), R.toUpper);


getUsers()
    .then(R.map(uppercaseUsername))
    .then(storeUsers)
    .then(console.log.bind(console));