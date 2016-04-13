var log = require('./log');

var add1 = x => x+1;


var y = [1,2,3];

log(  y.map(add1)  );


//y = 1;
//log(  y.map(add1)  );


var aNumber = x => ({map: fn => aNumber(fn(x))});
y = aNumber(1);
y.map(add1).map(add1).map(log);



var aString = x => ({map: fn => aString(fn(x))});
y = aString('');
y.map(add1).map(add1).map(log);
