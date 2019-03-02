// JSON

let person = [{
    id: 10,
    age: 25
},
{
    id: 11,
    age: 25
}];

console.log(JSON.stringify(person));

let obj = `[{"id":10,"age":25},{"id":11,"age":25}]`;
console.log(JSON.parse(obj));

