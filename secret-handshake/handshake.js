const codes = ['wink', 'double blink', 'close your eyes', 'jump'];

class SecretHandshake {
  constructor (code) {
    this.handShakeCode = code.toString(2).split('');
  }

  commands () {
    const commandList = [];
  }
}

module.exports = SecretHandshake;
