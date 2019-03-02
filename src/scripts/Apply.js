// apply
// mismo que el call pero permite agregar mas parametros
let o = {
    personId: 123,
    otro: 5,
    getId: function(title, action) {
        return `${title} - ${this.personId} - ${action}`;
    }
};

let newPerson = {
    personId: 456,
    otro: 10    
};
console.log(o.getId.apply(newPerson, ['Person', 'Oops']));
