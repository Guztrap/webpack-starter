// bind
// asignar a una propiedad nueva
let o = {
    personId: 123,    
    getId: function(fn1, fn2) {
        return `${fn1}--${this.personId}--${fn2}`;
    }
};

let newPerson = {
    personId: 456
};

let newFn = o.getId.bind(newPerson, 'Id', 'Oops');

console.log(newFn());
