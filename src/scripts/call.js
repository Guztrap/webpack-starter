// call
// cambiar el scope de manera externa
let o = {
    personId: 123,
    otro: 10,
    getId: function() {
        return this.personId + this.otro;
    },
    getOtro: function() {
        return this.personId + this.otro;
    }
};

// debe tener todas las propiedades declaradas
let newPerson = {
    personId: 456,
    otro: 20
};
console.log(o.getId.call(newPerson));
