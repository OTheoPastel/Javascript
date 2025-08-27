const modulo = require('./meuModulo'); // Importando o módulo
const calculadora_idade = require('./calculadoraidade'); // Importando o módulo

const mensagem = modulo.saudacao('Theo'); // Executando a função
const idadeem2025 = calculadora_idade.idade('Theo' , 2008); // Executando a função
console.log(mensagem);
console.log(idadeem2025)