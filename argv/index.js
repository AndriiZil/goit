const [operator, ...numbers] = process.argv.slice(2);

console.log(operator);

console.log(numbers);

switch(operator) {

    case 'sum':
        console.log(numbers.reduce((acc, cur) => acc + parseFloat(cur), 0))
        break;

    case 'deduct':
        console.log(numbers.reduce((acc, cur) => parseFloat(acc) - parseFloat(cur)))
        break;
    
    default: 
        console.log('Unknown operator');

}