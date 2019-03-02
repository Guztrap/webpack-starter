// Array

//reduce: returna un callback cuyo valor se va acumulando
let result = [1,2,3,4,5,6].reduce((acumulador, current) => {
    console.log(`acumulador -- ${acumulador}`);
    return acumulador + current;
});

console.log('Reduce');
console.log(result);

// foreach solo recorre
let persons = [
    { personId: 123, age: 10, name: 'Javier'},
    { personId: 321, age: 20, name: 'Rodriguez'},
    { personId: 231, age: 30, name: 'Olvera'}
];

console.log('Foreach');
 persons.forEach(x => console.log(x));

 // filter genera una lista a partir de una condicion
let resultFilter = persons.filter(x => x.age > 10);
console.log('Filter');
console.log(resultFilter);

// map regresa un objeto del mismo tamaño
let resultMap = persons.map(x => {
    x.age = x.age * 10;
    return x;
});
console.log('Map');
console.log(resultMap);

// find encuentra el primer elemento que encuentra
let resultFind = persons.find(x => x.age > 10);
console.log('Find');
console.log(resultFind);

// every: que si todos los miembtros cunplen una funcion
let resultEvery = persons.every(x => x.age >= 10);
console.log('Every');
console.log(resultEvery);

// pipe, la salida de un metodo es la entrada de otro
let resultPipe = persons
                        .filter(x => x.age > 10)
                        .map(x => {
                            x.age = x.age * 10;
                            return x;
                        })
                        .find(x => x.age == 1000);

console.log("combinacion filter map");
console.log(resultPipe);

