// Arrow function
// omitir la pallabra function y se pone el lambda
let getId = function() {
    return 123;
};

let getId2 = () => 234;

let getId3 = () => {
    return 456 + 10;
};

let getId4 = (prefix) => {
    return prefix + 10;
};

// un solo parmetro
let getId5 = prefix => prefix + 100;

console.log(getId());
console.log(getId2());
console.log(getId3());
console.log(getId4(10));
console.log(getId5(100));
