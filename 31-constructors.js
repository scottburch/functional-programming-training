var log = require('./log');


function Circle(x, y, r) {
    return {
        set radius(newR) {r = newR},
        set position(xy) {x = xy[0]; y = xy[1]},
        toString() {return `Circle([${x},${y}] ${r})`}
    }
}


var c = Circle(1,2,10);
log(  c.toString()  );

c.radius = 20;
log(  c.toString()  );

c.position=[6,7];
log(  c.toString()  );