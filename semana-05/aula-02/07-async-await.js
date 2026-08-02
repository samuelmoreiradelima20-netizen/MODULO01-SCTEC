function checkStock(quantity) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (quantity > 0) {
                resolve(`Em estoque: ${quantity} unidade(s)`);
            } else {
                reject("Produto indisponível.");
            }
        }, 2000);
    });
}