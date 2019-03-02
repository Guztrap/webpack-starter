// Destructuring Arrays
// Set arrays values into variables
let personsId = [0, 1, 2, 3, 4];
let [, person1, person2, ...persons] = personsId;

console.log('person1', person1);
console.log('person2', person2);
console.log('persons', persons);
