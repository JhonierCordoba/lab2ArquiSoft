const interface = require('readline-sync');

var calculator = require('./app/calculator')

const a = parseInt(interface.question("Deme el primer número"))
const b = parseInt(interface.question("Deme el segundo número"))

console.log(`Add ${a} + ${b} = ${calculator.add(a,b)}`);
console.log(`Minus ${a} - ${b} = ${calculator.minus(a,b)}`);
console.log(`Multiply ${a} * ${b} = ${calculator.multiply(a,b)}`);
console.log(`Divide ${a} / ${b} = ${calculator.divide(a,b)}`);
