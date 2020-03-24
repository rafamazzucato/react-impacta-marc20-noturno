const http = require('http');

const requisicao = (_, response) => {
    response.writeHead(200, { 'Content-Type' : 'text/html'});
    response.write('<h1>Texto a ser exibido no Browser</h1>');
    response.end();
}

const server = http.createServer(requisicao);
const resultado = () => console.log('Servidor em funcionamento');

server.listen(3000, resultado);