//Importa o modulo http nativo do Node.js
import http from 'http';

const PORT = 3000;

//Cria o servidor
const server = http.createServer((request, response) => {
    const url = request.url;
    const method = request.method;

    //Define o cabeçalho da resposta anterior como HTML
    response.setHeader('Content-Type', 'text/html; charset=utf-8');

    //Roteamento basico
    if (url === '/') {
        response.statusCode = 200; //OK
        response.end('<h1>Página inicial</h1>');
    }
    else if (url === '/sobre' && method === 'GET') {
        response.statusCode = 200; //OK
        response.end('<h1>Sobre nos</h1><p>Esta é uma aplicação de exemplo com Node.js puro.</p>');
    }
    else if (url === '/contato') {
        response.statusCode === 200; //OK
        response.end ('<h1>Fale conosco</h1>');
    }
    else {
        // se nenhuma rota corresponder
        response.statusCode = 404; //Not found
        response.end('<h1>404 - Página Não Encontrada</h1>');
    }
});

// Inicia o servidor para ouvir na porta definida
server.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});