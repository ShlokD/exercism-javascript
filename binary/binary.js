class Binary {
  constructor(binaryString) {
    this.binaryString = binaryString;
  }

  toDecimal() {
    if(/^[01]+$/.test(this.binaryString)) {
      return this.binaryString.split('').reverse().reduce((totalVal, bitVal, index) => {
        totalVal += Math.pow(2, index) * bitVal;
        return totalVal;
      }, 0);
    } else {
      return 0;
    }
  }
}

module.exports = Binary;
