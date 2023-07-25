class Calc {
  constructor(a, b) {
    this.a = Number(a);
    this.b = Number(b);
    if (Number.isNaN(this.a) || Number.isNaN(this.b)) {
      throw new Error("wrong value");
    }
    return;
  }

  add() {
    return this.a + this.b;
  }

  substract() {
    return this.a - this.b;
  }

  multiply() {
    return this.a * this.b;
  }

  divide() {
    if (this.b === 0) {
      throw new Error("b must not be '0'");
    }
    return this.a / this.b;
  }
}

const userA = prompt("Podaj liczbę A");
const userB = prompt("Podaj liczbę B");

const totalCalc = new Calc(userA, userB);

console.log(totalCalc.divide());
