export function idade(nome, anoNasci, anoAtual) {
    idade = anoAtual - anoNasci;
    return `Olá, ${nome}! em ${anoAtual} você terá ${idade} anos!`;
}

// Exportando a função para que possa ser usada em outros arquivos