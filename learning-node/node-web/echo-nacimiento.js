const http = require('http');
const server = http.createServer();

server.on('request', (req, res) => {
    if (req.method == 'POST' && req.url === '/edad') {
        let body = [];
        let semana = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
        req
          .on('data', chunck => {
            body.push(chunck);
        })
          .on('end', () => {
            res.writeHeader(200, { "Content-Type": "text/plain" });
            let edad = new Date(body);
            edad = semana[edad.getDay()];
            res.end('Naciste el día ' + edad);
        });     
    } else {
        res.statusCode = 404;
        res.end();
    }
});

server.listen(3001);
console.log('Servidor en la url http://localhost:3001');