var log = require('./log');
var R = require('ramda');
var _ = require('lodash');

var firstTwoLetters = function(words) {
    return _.map(words, function(word) {
        return word.slice(0, 2);
    });
};

log(  firstTwoLetters(['red', 'green', 'blue']) );


var firstTwo = R.map(R.slice(0, 2));

log( firstTwo(['red', 'green', 'blue'])  );
