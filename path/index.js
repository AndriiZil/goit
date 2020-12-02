const path = require('path');

console.log(__filename)

console.log(path.parse(__filename).ext)

console.log(path.extname('index.pdf'))
