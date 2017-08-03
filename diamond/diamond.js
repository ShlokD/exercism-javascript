const diamondString = 'ABCDEFGHIJKLMNOPQRSTUVXYZ';

class Diamond {
  makeDiamond (endLetter) {
    if (endLetter === 'A') return 'A\n';
    const mid = diamondString.indexOf(endLetter);
    const range = [];
    for (let i = 0; i <= mid; ++i) {
      range.push(i);
    }

    for (let i = mid - 1; i >= 0; --i) {
      range.push(i);
    }

    return range.reduce((diamond, item) => {
      const arr = new Array(mid * 2 + 1).fill(' ');
      arr[mid - item] = diamondString[item];
      arr[mid + item] = diamondString[item];
      return diamond.concat(arr.join('')).concat('\n');
    }, '');
  }
}

module.exports = Diamond;
