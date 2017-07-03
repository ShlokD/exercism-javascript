const usedNames = {};
class Robot {
  constructor () {
    this.allowedChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.usedNames = {}
    this.name = this.generateName()
    this.markTrue()
  }

  markTrue () {
    usedNames[this.name] = true;
  }

  generateName () {
    let tempName = '';
    for (let i = 0; i < 2; ++i) {
      tempName += this.allowedChars.charAt(Math.floor(Math.random() * this.allowedChars.length))
    }
    tempName += Math.random().toString().substr(2, 3);
    return tempName;
  }

  reset () {
    const newName = this.generateName();
    if (usedNames[newName]) {
      this.reset()
    } else {
      this.name = newName
      this.markTrue()
    }
  }
}

module.exports = Robot;
