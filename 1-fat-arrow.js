var log = require('./log');

function Animal(what, sound) {
    this.sound = sound;
    return {
        makeSound: () => `the ${what} says ${this.sound}`,
        makeSound2() {
            return `the ${what} says ${this.sound}`;
        },
        makeSound3: function() {
            return `the ${what} says ${this.sound}`;
        }

    }

}

var dog = new Animal('dog', 'bark');
log(dog.makeSound());
log(dog.makeSound2());
log(dog.makeSound3());