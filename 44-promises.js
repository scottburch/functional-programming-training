var log = require('./log');
var R = require('ramda');

var getUsers = () =>
    new Promise(resolve => setTimeout(() => resolve([{username: 'Scott'}, {username: 'Jim'}])));

var storeUsers = users =>
    new Promise(resolve => setTimeout(() => resolve(users)));

var usernameLens = R.lens(R.prop('username'), R.assoc('username'));

var uppercaseUsername = R.over(usernameLens, R.toUpper);


getUsers()
    .then(R.map(uppercaseUsername))
    .then(storeUsers)
    .then(console.log.bind(console));