var R = require('ramda');

var users = [
    {firstName: 'Todd', age:25},
    {firstName: 'Scott', age: 50},
    {firstName: 'Anthony', age: 66},
    {firstName: 'Mike', age: 35}
];

var hello = name => `Hello ${name}`;

//var hello = R.concat('Hello ');

var exclaim = R.concat(R.__, '!');

var greet = R.pipe(hello, exclaim);

var greetUser = R.pipe(R.prop('firstName'), greet);



var greetUsers = list => list.map(user => greet(user.firstName)).join('\n');


/*var greetUsers = R.pipe(
    R.map(greetUser),
    R.join('\n')
);*/

var greetSenior = R.pipe(
    R.filter(R.propSatisfies(R.lt(40), 'age')),
    greetUsers
);


console.log(greetUsers(users));
console.log('------------------');
console.log(greetSenior(users));


