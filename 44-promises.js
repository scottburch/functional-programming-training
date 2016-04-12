var log = require('./log');
var R = require('ramda');

var getUsers = () =>
    new Promise(resolve => setTimeout(R.partial(resolve, [[{username: 'Scott'}]])));

var storeUsers = users =>
    new Promise(resolve => setTimeout(R.partial(resolve, [users])));

var usernameLens = R.lens(R.prop('username'), R.assoc('username'));

var uppercaseUsername = R.over(usernameLens, R.toUpper);


getUsers()
    .then(R.map(uppercaseUsername))
    .then(storeUsers)
    .then(console.log.bind(console));