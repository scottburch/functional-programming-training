
var log = require('./log');
var R = require('ramda');

var queryString = R.pipe(
    R.reject(R.isNil),
    R.mapObjIndexed((v, k) => `${k}=${encodeURIComponent(v)}`),
    R.values(),
    R.join('&'),
    R.when(R.length, R.concat('?'))
);


log(  queryString({foo:'bar',baz:'boo'})  );

log(  queryString(  {foo:undefined, baz:0})  );

log( queryString()  );

log(  queryString({})  );

