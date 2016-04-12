var log = require('./log');
var R = require('ramda');

var people = [
    {firstName: 'Scott', age: 50},
    {firstName: 'Anthony', age: 40},
    {firstName: 'Jim', age:25},
    {firstName: 'Mike', age: 20}
];

var byFirstName = R.compose(R.toLower, R.prop('firstName'));
var byAge = R.prop('age');


var showUsers = R.pipe(
    R.map(JSON.stringify),
    R.join('\n'),
    log
);


showUsers(R.sortBy(byFirstName, people));
showUsers(R.sortBy(byAge, people));
