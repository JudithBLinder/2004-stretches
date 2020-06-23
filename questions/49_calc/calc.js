// - Write a chainable Calculator that can add, subtract,and multiply

class chainCalc {
  constructor(num) {
    if (typeof num !== 'number') {
      throw new Error('Invalid input!');
    }
    this.result = num;
  }

  add(num) {
    this.result += num;
    return this;
  }

  sub(num) {
    this.result -= num;
    return this;
  }

  mul(num) {
    this.result *= num;
    return this;
  }
}

module.exports = { chainCalc };
