var log = require('./log');
var R = require('ramda');

var group = [{firstName: 'Scott', age: 50}, {firstName: 'Joe', age: 12}, {firstName: 'Jim', age: 10}];

var greet = R.concat('Hello, ');

var exclaim = R.concat(R.__, '!');

var sayHello = R.pipe(greet, exclaim);

function greetGroup(list) {
    var out = [];
    for(var i = 0; i < list.length; i++) {
        out.push(sayHello(list[i].firstName));
    }
    return out.join('\n');
}
log(  greetGroup(group)  );



var greetGroup = R.pipe(
    R.map(R.prop('firstName')),
    R.map(sayHello),
    R.join('\n')
);
log( greetGroup(group)  );



var greetGroup = list => list
    .map(o => o.firstName)
    .map(sayHello)
    .join('\n');
log(  greetGroup(group)  );