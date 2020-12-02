const fs = require('fs');
const { promises: fsPromises } = require('fs');
const path = require('path');

// fs.writeFile('test.txt', 'Test NodeJS', (err) => {
//     if (err) console.log(err);
//     console.log('File saved');
// })

// fs.appendFile('test.txt', 'Added data', (err) => {
//     if (err) console.log(err);
//     console.log('Data added')
// })

// fs.readFile('test.txt', 'utf-8', (err, data) => {
//     if (err) console.log(err);
//     console.log(data);
// })

// fs.unlink('test.txt', (err) => {
//     if (err) console.log(err);
// })

// fs.mkdir('temp', (err) => {
//     if (err) console.log(err);
// })

const filePath = path.join(__dirname, '../example.json');

console.log(filePath);

async function main() {
    // await fsPromises.writeFile('another.txt', 'Some data')
    const data = await fsPromises.readFile(filePath, 'utf-8');

    // console.log(data.toString('utf-8'))

    console.log(data);
}

main();