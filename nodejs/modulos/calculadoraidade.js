function idade(nome, anoNasci) {
    idade = 2025 - anoNasci;
    return `Olá, ${nome}! em 2025 voce terá ${idade} anos!`;
}

// Exportando a função para que possa ser usada em outros arquivos
module.exports = {
    idade
};