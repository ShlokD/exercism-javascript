class Octal {
  constructor(octalString) {
    this.num = octalString;
    this.isValid = /^[01234567]+$/.test(octalString);
  }

  toDecimal() {
    if(this.isValid) {
      return this.num.split('').reverse().reduce((total, digit, index) => total += Math.pow(8, index) * digit, 0)
    }
    return 0;
  }
}

module.exports = Octal;
