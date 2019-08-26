const http = require('http');

http.createServer((req, res) => {

    res.writeHead(200, { 'content-type': 'application/json' });

    let cadena = {
        usuario: 'Alan P',
        password: 'alanchitobb',
        edad: 32,
        url: req.url
    }

    //res.write('Hola mundo');
    res.write(JSON.stringify(cadena));
    res.end();

}).listen(8080);

console.log('Servidor iniciado en el puerto 8080');