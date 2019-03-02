// ecma ES6 Herencia
class Engine {
    constructor() {
        this.type = 'Hybrid';
    }

    start() {
        return `starting ${this.type}`;
    }
}


class Car extends Engine {
    constructor() {
        super();
    }

    start() {
        return `Car to start ${this.type}`;
    }
}

let car = new Car();
console.log(car.start());

