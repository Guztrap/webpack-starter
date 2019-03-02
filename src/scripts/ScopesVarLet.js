console.log('Hola mundo');

//Let variables only live inside a specific scope, outside the scope they are dead
//Var variables are global variables, can access to every part from the code
if (true) {
    var personaId = 25;
    console.log(personaId);
}

console.log(personaId);
