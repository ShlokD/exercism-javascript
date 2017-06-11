const BigInt = require('./big-integer.js')

class Grains {
  constructor() {
    this.base = BigInt(2);
  }

  exp(num) {
    return this.base.pow(num - 1)
  }

  square(num) {
    return this.exp(num).toString();
  }

  total() {
    return this.exp(65).add(-1).toString();
  }
}

module.exports = Grains;
