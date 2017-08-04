class Converter {
  checkBits (bits, source) {
    const leadingZero = bits[0] === 0 && bits.length > 1;
    const exceedBits = bits.find((bit) => bit >= source);
    const negativeBits = bits.find((bit) => bit < 0);
    const errorBits = bits === undefined || bits.length === 0 || negativeBits || exceedBits || leadingZero;
    if (errorBits) {
      throw new Error('Input has wrong format');
    }
  }

  getErrorConditionForBase (base) {
    return isNaN(base) || base <= 1 || parseInt(base, 10) !== base;
  }

  checkBase (base, message) {
    if (this.getErrorConditionForBase(base)) {
      throw new Error(message);
    }
  }

  convert (bits, source, dest) {
    this.checkBase(source, 'Wrong input base');
    this.checkBase(dest, 'Wrong output base');
    this.checkBits(bits, source);

    if (bits.length === 1 && bits[0] === 0) return [0];

    let number = bits.reverse().reduce((num, currentBit, index) => {
      num += parseInt(Math.pow(source, index)) * currentBit
      return num;
    });

    const result = [];
    let divisionResult = 0;
    let remainderResult = 0;
    while (number !== 0) {
      divisionResult = parseInt(number / dest);
      remainderResult = parseInt(number % dest);
      number = divisionResult;
      result.push(remainderResult);
    }
    return result.reverse();
  }
}

module.exports = Converter;
