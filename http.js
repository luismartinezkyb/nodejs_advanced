const http = require('http');

const server = http.createServer((req, res)=>{

    res.write('Hello world')
    res.end()
})

server.listen(3001);

console.log('Servidor escuchando en el puerto 3001');