// to create functions use the key word 'function'
// rest parameters "...variable" that will be an array of type ANY, must be the last parameters
function printCards(num1,...nums) {
    console.log('num1',num1);    
    nums.forEach(num => console.log(num));
}

printCards(11,22,33);