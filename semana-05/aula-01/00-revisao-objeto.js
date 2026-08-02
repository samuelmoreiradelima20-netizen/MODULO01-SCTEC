const order = {
customer: "Ana",
items: [
    {name: "pizza", price: 50 }
],
addres: {
    city: "floripa"
},
total() {
  return this.items.reduce((sum, item) => {
 return sum +item.price
}, 0)
},
delivered: false
}
console.log(order.customer);
console.log(order.total());
