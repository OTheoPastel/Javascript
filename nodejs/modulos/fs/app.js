// importantdo o modulo fs (file system)
// const fs = require('fs');
import fs from 'fs';
// lendo um arquivo de forma assincrona
fs.readFile('exemplo.txt' , 'utf8' , (erro, dados) => {
// tratando erro
    if (erro) {
        //adicionando no console
        console.error('erro ao ler o arquivo',erro);
        //retornando para nao executar o console.log abaixo
        return;

    }   
    //se nao houver erro,e exibindo o conteudo do arquivo
    console.log ('conteudo do arquivo:' , dados);

});
    //imprimondo uma mensagem antes da leitura do arquivo
    console.log('esta mensagem aparece primeiro.');