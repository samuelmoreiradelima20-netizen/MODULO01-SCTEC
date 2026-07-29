const prices = [100, 50, 30, 80, 120, 65, 45, 25, 90, 10];

// Aplica 10% de desconto
const desconto = prices.map(preco => preco * 0.9);

console.log(desconto);

// Filtra os preços acima de 60
const acimaDe60 = desconto.filter(preco => preco > 60);

console.log(acimaDe60);