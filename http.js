const http = require('http');

const server = http.createServer((req, res) => {
    
    const { method, url } = req;

    console.log('METHOD', method);
    console.log('URL', url);

    // res.setHeader('Content-Type', 'application/json');

    // res.setHeader('x-Powered-By', 'Node.JS');

    let body = [];

    req.on('data', chunk => {

        body.push(chunk);

    }).on('end', () => {
        body = Buffer.concat(body).toString();
        console.log(body);
    });

    const data = JSON.stringify(body);

    console.log(data);

    res.writeHead(200, {
        'Content-Type': 'application/json',
        'x-Powered-By': 'Node.JS'
    })

    res.end(data);
});

const PORT = 3000;
const HOST = '127.0.0.1';

server.listen(PORT, HOST, () => {
    console.log('Server was started.');
});
