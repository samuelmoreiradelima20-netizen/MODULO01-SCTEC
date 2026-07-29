// AULA 03 MINI PROJETO: CATALAGO DE PRODUTOS COM (ARRAY DE OBJETOS)

const products = [
{"name": "camiseta", "price": 100, "category": "roupa"},
{"name": "cordão", "price": 150, "category": "acessorio"},
{"name": "tenis", "price": 200, "category": "calçado"},
{"name": "calça", "price": 149.99, "category": "roupa"}
]
 const clothes = products.filter ((product) => {
    return product.category === "roupa"

 })

const names = clothes.map((item) => {
 return item.name


})

const total = clothes.reduce((sum, p) => {
 return sum + p.price


}, 0)

 console.log (names);
 console.log(`R$ ${total}`);

 const productNames = products.map ((product) => {
    return product.name
 })

 console.log(productNames);
  const totalProducts = products.reduce ((sum, p) => {
    return sum + p.price
  }, 0)

  console.log("R$" + totalProducts);





