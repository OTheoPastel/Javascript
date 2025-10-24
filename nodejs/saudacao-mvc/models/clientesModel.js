module.exports = {
    gerarMensagemLogin: (login, senha) => {
        let acesso;

        if (login === "Theo" && senha === "123") {
            acesso = "liberado";
        } else {acesso = "negado";
        }
        return `Olá, ${login}! Seu acesso foi ${acesso}.`;
    }
};