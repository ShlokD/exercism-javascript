class Trinary {
  constructor (triNum) {
    this.num = triNum;
    this.isValid = /^[012]+$/.test(triNum);
  }

  toDecimal () {
    if (this.isValid) {
      return this.num.split('').reverse().reduce((total, digit, index) => {
        total += Math.pow(3, index) * digit;
        return total;
      }, 0)
    }
    return 0;
  }
}

module.exports = Trinary;
