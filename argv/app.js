const yargs = require('yargs');

const users = [
    { id: 1, name: 'Ira', surname: 'Iren' },
    { id: 2, name: 'Taras', surname: 'Tar' },
    { id: 3, name: 'Igor', surname: 'Ig' },
]

const argv = yargs
    .number('id')
    .string('name')
    .string('surname')
    .alias('name', 'n')
    .alias('surname', 's')
    .argv;

const usersFound = users.filter(user => {
    return (
        checkField('id', user) && checkField('name', user) && checkField('surname', user)
    )
});

function checkField(fieldName, user) {
    return !(argv[fieldName] && argv[fieldName] !== user[fieldName]);
}

console.log(usersFound);
