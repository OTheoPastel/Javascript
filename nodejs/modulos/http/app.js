//importando o modelo http
const http = require('http');
//criando um sevidor que responde com "Hello World" para todas as requisicoes
http.createServer((req, res)=> {
    //definindo o cabecalho da resposta com status 200 (ok) e tipo de conteudo text/plain
    res.writeHead(200, {'Content-Type' : 'text/plain'});
    //Enviando a resposta "Hello World!"
    res.end('Ola mundo!');
    //adicionando um log no console para cada requisicao recebida
}).listen(8080);
console.log('Servidor rodando em http://localhost:8080/');