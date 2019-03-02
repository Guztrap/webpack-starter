function findPerson() {
    let message = 'Finding';

    let findFunction = function searchKey() {
        let message = 'Override';
        console.log(message);        
    };

    findFunction();
    console.log(message);  
}

findPerson();
