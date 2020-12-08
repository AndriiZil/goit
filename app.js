const express = require('express');
const logger = require('morgan');

const { setCookie, auth } = require('./middlewares');

const users = [
    { id: 1, name: 'Andrii', age: 27 },
    { id: 2, name: 'Bob', age: 35 },
    { id: 3, name: 'Elena', age: 32 },
]

const app = express();

// app.use(express.static('public'));
app.use('/static', express.static(__dirname + '/public'));

app.use(express.json());

// app.use((req, res, next) => {
//     console.log(`METHOD: ${req.method} ${new Date().toISOString()}`);
//     next();
// });

app.use(logger('dev'));

app.get('/', (request, response, nextFunction) => {

    request.users = users;

    nextFunction();
}, (req, res, next) => {

    console.log(req.users);

    res.send({
        success: true,
        data: users
    });
});

app.post('/', setCookie, auth, (req, res, next) => {
    const { name, age } = req.body;

    users.push({
        id: users.length + 1,
        name,
        age
    });

    console.log(req.setDate);

    return res.status(201).json({
        success: true,
        data: users
    });
});

app.patch('/', (req, res, next) => {

    res.send({
        success: true,
        data: 'Hello Express PATCH'
    });
});

app.put('/', (req, res, next) => {

    res.send({
        success: true,
        data: 'Hello Express PUT'
    });
});

app.delete('/', (req, res, next) => {

    res.send({
        success: true,
        data: 'Hello Express DELETE'
    });
});

app.use((err, req, res, next) => {
    const statusCode = err.code || err.statusCode || err.status || 500;
    const message = err.message || 'Server Internal Error';

    return res.status(statusCode).json({
        success: false,
        message
    })
});

app.listen(8080, () => {
    console.log('Server started');
});
