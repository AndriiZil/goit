const { sum } = require('./index');
const { add } = require('./test');
const ClassExample = require('./class-test');
require('./example');
require('./example');
require('./example');

const classExample = new ClassExample();

sum(2, 5)

sum(10, 15)

add(5, 15)

classExample.getData();

console.log(global.name);