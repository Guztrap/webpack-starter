// contructor
function person(id) {
    this.personId = id;
    this.register = function() {
        console.log(`Register ${this.personId}`);        
    };
}

let person1 = new person(123);

person1.register();
