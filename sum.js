var R = require('ramda');

var add = (a,b) => a+b;
console.log('add(1,2) =', add(1,2));



var addCurry = a => b => a + b;
console.log('addCurry(1)(2) = ', addCurry(1)(2));



var add3 = addCurry(3);
console.log('add3(2) = ', add3(2));



var add5 = R.add(5);
console.log('add5(2) = ', add5(2));




