var log = require('./log');
var R = require('ramda');

var counter = () => {
    var c = 0;
    return () => c++;
};

var count = counter();

log(  [count(), count(), count(), count()] );


var accum = () => {
    var total = 0;
    return x => total += x;
};



log(  [1,2,3,4,5,6].map(accum())  );
log(  R.last([1,2,3,4,5,6].map(accum()))  );

