const codes = {
  1: 'wink',
  2: 'double blink',
  4: 'close your eyes',
  8: 'jump'
};

class SecretHandshake {
  constructor (code) {
    this.handShakeCode = code;
  }

  isNumber (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
  }

  calcCode () {
    const codesKeys = Object.keys(codes).map((val) => parseInt(val));
    const commandsList = [];
    for (var i = 0; i < codesKeys.length; ++i) {
      const key = codesKeys[i];
      if ((this.handShakeCode & key) !== 0) {
        commandsList.push(codes[key]);
      }
    }
    return (this.handShakeCode & 16) !== 0 ? commandsList.reverse() : commandsList;
  }

  commands () {
    if (this.isNumber(this.handShakeCode)) {
      return this.calcCode();
    } else {
      throw new Error('Handshake must be a number');
    }
  }
}

module.exports = SecretHandshake;
