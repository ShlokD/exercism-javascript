var Pangram = function (val) {
  this.string = val ? val.toLowerCase() : '';
};

Pangram.prototype.isPangram = function () {
  if (this.string) {
    return this.string.match(/([a-z])(?!.*\1)/g).length === 26;
  }
  return false;
}

module.exports = Pangram;
