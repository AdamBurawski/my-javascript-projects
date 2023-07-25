/* eslint-disable max-classes-per-file */
class Basket {
  constructor() {
    this.items = this.loadFromLocalStorage() ?? [];
  }

  clear() {
    this.items.length = 0;
    // alt
    // this.items.splice(0);
    // this.items = [];
    this.saveToLocalStorage();
  }

  add(item) {
    this.items.push(item);
    //alt.1
    // this.addToToalValue(item.price);
    this.saveToLocalStorage();
  }

  //alt.1
  // addToToalValue(newPrice) {
  //   this.totalValue += newPrice;
  // }

  getTotalValue() {
    //alt.
    // let sum = 0;
    // for (const product of this.items) {
    //   sum += product.price;
    // }
    // return sum;
    //alt.
    return this.items.reduce((prev, curr) => prev + curr.price, 0);
  }
  getBasketSummary() {
    return this.items.map((product, i) => {
      return {
        id: i + 1,
        text: `${i + 1} - ${product.name} - ${product.price.toFixed(2)} zł`,
      };
    });
  }
  remove(no) {
    this.items.splice(no - 1, 1);
    this.saveToLocalStorage();
  }
  saveToLocalStorage() {
    localStorage.setItem("basket-items", JSON.stringify(this.items));
  }

  loadFromLocalStorage() {
    return JSON.parse(localStorage.getItem("basket-items"));
  }
}

class Product {
  constructor(productName, productPrice) {
    this.name = productName;
    this.price = productPrice;
  }
  setNewPrice(newPrice) {
    this.price = newPrice;
  }
}

const shopBasket = new Basket();

const oranges = new Product("Pomarańcze LUZ", 7.55);
const cucumbers = new Product("Ogórek duży", 8.2);
const bułka = new Product("Bułka", 1.49);

// shopBasket.add(cucumbers);
// shopBasket.add(oranges);
// console.log(cucumbers);

//opc.rabat
// shopBasket.addToToalValue(-10);

// shopBasket.remove();
shopBasket.getBasketSummary();
