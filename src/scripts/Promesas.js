// Promesas
 let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        try {
            resolve('Todo Ok');
        }
        catch (error) {
            reject(`Error ${error}`);
        }
    }, 1000);
});

promise.then(success => console.log(`ok ${success}`), 
             error => console.log(`Error ${error}`)) // Error cachado en promesa
        .catch(error => {
            console.log(`Exceptionss ${error}`); // Error no cachado
        });

console.log('Test');
             
