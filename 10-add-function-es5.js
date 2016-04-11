/**********************
 * Currying and partially applied functions
 */


var log = require('./log');

function add(a) {
    return function(b) {
        return a+b;
    }
}

log(  add(1)(2)  );