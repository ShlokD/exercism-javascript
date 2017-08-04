// Solution WIP
class Say {
  constructor () {
    this.units = ',one,two,three,four,five,six,seven,eight,nine'.split(',');
    this.teens = ',eleven,twelve,thirteen,fourteen,fifteen,sixteen,seventeen,eighteen,nineteen'.split(',');
    this.tens = ',twenty,thirty,forty,fifty,sixty,seventy,eighty,ninety'.split(',');
    this.hundreds = 'hundred, thousand, million, billion'.split(',');
  };

  inEnglish (num) {
    if (num >= 0 && num <= 999999999999) {
      return 'zero';
    } else {
      throw new Error('Number must be between 0 and 999,999,999,999.')
    }
  }
}

module.exports = new Say();
