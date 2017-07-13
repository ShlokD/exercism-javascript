class Hexadecimal {
  constructor (num) {
    this.num = num;
  }

  toDecimal () {
    const dec = Number(`0x${this.num}`, 16);
    return !isNaN(dec) ? dec : 0;
  }
}

module.exports = Hexadecimal;
