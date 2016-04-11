var R = require('ramda');
var _ = require('lodash');

var stringAttributes = attrsObj => _.map(attrsObj, (v, k) => `${k}="${v}"`).join(' ');

/*var stringAttributes = R.pipe(
    R.mapObjIndexed((v, k) => `${k}="${v}"`),
    R.values,
    R.join(' ')
);*/

var wrap = R.curry((tag, attrs, inner) => `<${tag}${_.keys(attrs).length ? ' ' : ''}${stringAttributes(attrs)}>${inner}</${tag}>`);


var div = wrap('div');
var h1 = wrap('h1');
var li = wrap('li');


var makeHeader = R.pipe(
    h1({}),
    div({class: 'header'})
);


console.log('makeHeader("my header") =', makeHeader('myHeader'));
console.log('makeHeader("another header") =', makeHeader('another header'));


console.log('list', ['first','second','third'].map(li({})).join(''));