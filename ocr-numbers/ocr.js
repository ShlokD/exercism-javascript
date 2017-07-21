const ocrMap = {
  0: ' _ \n' +
    '| |\n' +
    '|_|\n' +
    '   ',
  1: '   \n' +
    '  |\n' +
    '  |\n' +
    '   ',
  2: ' _ \n' +
  ' _|\n' +
  '|_ \n' +
  '   ',
  3: ' _ \n' +
    ' _|\n' +
    ' _|\n' +
    '   ',
  4: '   \n' +
      '|_|\n' +
      '  |\n' +
      '   ',
  5: ' _ \n' +
    '|_ \n' +
    ' _|\n' +
    '   ',
  6: ' _ \n' +
  '|_ \n' +
  '|_|\n' +
  '   ',
  7: ' _ \n' +
  '  |\n' +
  '  |\n' +
  '   ',
  8: ' _ \n' +
    '|_|\n' +
    '|_|\n' +
    '   ',
  9: ' _ \n' +
  '|_|\n' +
  ' _|\n' +
  '   '
};

const getNumStrings = (stringDigits) => {
  const numStrings = [];
  for (let i = 0; i < stringDigits[0].length; i += 3) {
    numStrings.push(stringDigits.map((stringDigit) => stringDigit.substr(i, 3)).join('\n'));
  };
  return numStrings;
};

const convertFromOcrMap = Object.keys(ocrMap).reduce((overallMap, number) => {
  const stringRepr = ocrMap[number];
  overallMap[stringRepr] = number;
  return overallMap;
}, {});

class Ocr {
  parse (numString) {
    const charRows = numString.split('\n');
    const stringDigits = [];
    for (let i = 0; i < charRows.length; i += 4) {
      stringDigits.push(charRows.slice(i, i + 4));
    }
    return stringDigits.map((digit) => getNumStrings(digit));
  }

  convert (num) {
    const parsed = this.parse(num);
    return parsed.map((parsedRow) => {
      return parsedRow.reduce((overallDigit, currentDigit) => {
        const digit = convertFromOcrMap[currentDigit] || '?';
        return overallDigit + digit;
      }, '')
    }).join(',');
  }
}

module.exports = new Ocr();
