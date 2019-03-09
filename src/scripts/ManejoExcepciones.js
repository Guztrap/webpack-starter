//Errores
try {
    // let person = newPerson;
    throw new Error('Throw');
}
catch(error) {
    console.log(`Error -->${error}`);
    console.error(`Error-->  ${error}`); 
}
finally {
    console.log('Finally');    
}