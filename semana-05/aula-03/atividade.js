/*class Player {
  constructor(name) {
    this.name = name;
  }
  hello() {
    console.log(`Oi, ${this.name}`);
  }
}
const p = new Player("Ana");
p.hello();*/

/*class Media {
  play() { console.log("mídia"); }
}
class Movie extends Media {
  play() { console.log("filme"); }
}
class Song extends Media {
  play() { console.log("música"); }
}
const catalog = [new Movie(), new Song()];
catalog.forEach((item) => item.play());*/

/*class Media {
  constructor(title) {
    this.title = title;
  }
}
class Movie extends Media {
  describe() {
    console.log(`Filme: ${this.title}`);
  }
}
const m = new Movie("Matrix");
m.describe();*/

/*class User {
  constructor(name) {
    this.name = name;
  }
}
class Admin extends User {
  constructor(name, level) {
    super(name);
    this.level = level;
  }
}
const carla = new Admin("Carla", 3);
console.log(carla.name);
console.log(carla.level);*/

/*class User {
  showRole() {
    console.log("usuário comum");
  }
}
class Admin extends User {
  showRole() {
    console.log("administrador");
  }
}
const carla = new Admin();
carla.showRole();*/

/*class User {
  constructor(name) {
    this.name = name;
  }
  login() {
    console.log(`${this.name} entrou no sistema`);
  }
}
class Student extends User {}
const bruno = new Student("Bruno");
bruno.login();*/

/*class Thermostat {
  constructor() {
    this.temp = 20;
  }
  up() {
    this.temp = this.temp + 1;
  }
}
const t = new Thermostat();
t.up();
t.up();
t.up();
console.log(t.temp);*/

/*class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}
const item = new Product("Café", 10);
console.log(item.price);*/

/*class Cart {
  constructor() {
    this.items = 0;
  }
  addItem() {
    this.items = this.items + 1;
  }
}
const cart1 = new Cart();
const cart2 = new Cart();
cart1.addItem();
cart1.addItem();
console.log(cart2.items);*/

/*class Vehicle {
  constructor(brand) {
    this.brand = brand;
  }
}
class Car extends Vehicle {
  constructor(brand, doors) {
    super(brand);
    this.doors = doors;
  }
}
const fiat = new Car("Fiat", 4);
console.log(`${fiat.brand} tem ${fiat.doors} portas`);
*/


