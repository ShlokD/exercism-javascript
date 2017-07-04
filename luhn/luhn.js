const luhnReducer = (sum, value, index) => {
  let intValue = parseInt(value);
  if (index % 2 !== 0) {
    let doubled = intValue * 2;
    intValue = doubled > 9 ? doubled - 9 : doubled;
  }
  return sum + intValue;
}

class Luhn {
  constructor (num) {
    this.valid = this.checkValidLuhn(num);
  }

  checkValidLuhn (number) {
    const cleanNum = number.trim().replace(/\s/g, '');
    if (/\d+/.test(number)) {
      const sum = cleanNum.split('').reduce(luhnReducer, 0);
      return sum !== 0 && sum % 10 === 0;
    }
    return false;
  }
}

module.exports = Luhn;
