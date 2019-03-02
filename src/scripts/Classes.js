// ecma ES6
class Person {
    constructor(id) {
        this.id = id;
    }

    identify(suffix) {
        return `person ${suffix}`;
    }
}

let person = new Person(123);
console.log(person);

let result = person.identify('Hola');
console.log(result);
