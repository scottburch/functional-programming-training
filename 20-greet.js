/***********
 * Function Composition
 */

var log = require('./log');
var R = require('ramda');


var greet = R.concat('Hello, ');

var exclaim = R.concat(R.__, '!');

var sayHi = R.compose(exclaim, greet);




log(  sayHi('Scott')  );



var sayHi = R.pipe(
    greet, 
    exclaim
);

log(  sayHi('Joe')  );