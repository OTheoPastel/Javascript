module.exports = {
    cadastrar: (id, descricao, quantidade, preco) => {
        return `O produto ${descricao}, com ID: ${id} - Quantidade: ${quantidade} - valor unitario: ${preco} foi cadastrado com sucesso!`;
    }
};