// CLousure
// Encapsular variables privadas
/*
let app = (function() {
    let personId = 123;
    
    return function(num) {
        return personId + num;
    };
})();

console.log(app(10));
*/

// change es ina variable privada que se asigna cuando se llama el metodo padre
// el valor se guarde en change
function sumaIva(change) {
    return function(amount) {
        return change * amount;
    };
}

let iva = sumaIva(0.16);
let ivo = sumaIva(0.3);
console.log(iva(20));
console.log(ivo(20));
console.log(iva(30));
console.log(ivo(30));
