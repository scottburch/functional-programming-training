var log = require('./log');

function speak() {
    log(this.sound);
}

var speak2 = () => log(this.sound);


speak.call({sound: 'bark'});
speak2.call({sound: 'meow'});