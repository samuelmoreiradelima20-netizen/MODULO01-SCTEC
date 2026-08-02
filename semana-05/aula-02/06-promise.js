function checkStock(quantity) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (quantity > 0) {
                resolve({
                    status: "Disponível",
                    quantidade: quantity,
                    mensagem: `Há ${quantity} unidades em estoque.`
                });
            } else {
                reject({
                    status: "Indisponível",
                    mensagem: "Produto sem estoque."
                });
            }
        }, 2000);
    });
}

// Testando a função
checkStock(8)
    .then(resultado => {
        console.log(resultado.status);
        console.log(resultado.mensagem);
    })
    .catch(erro => {
        console.log(erro.status);
        console.log(erro.mensagem);
    })
    .finally(() => {
        console.log("Verificação de estoque finalizada.");
    });