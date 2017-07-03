var BeerSong = function () {};

BeerSong.prototype.getBottleString = function (number) {
  return number === 1 ? 'bottle' : 'bottles';
}
BeerSong.prototype.howMany = function (number) {
  return number + ' ' + this.getBottleString(number) + ' of beer on the wall, ' + number + ' ' + this.getBottleString(number) + ' of beer.\n'
}

BeerSong.prototype.takeOneDown = function (number) {
  var numberString = number === 0 ? 'no more' : number;
  var itString = number === 0 ? 'it' : 'one';
  return 'Take ' + itString + ' down and pass it around, ' + numberString + ' ' + this.getBottleString(number) + ' of beer on the wall.\n'
}

BeerSong.prototype.zeroBottles = function () {
  return 'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n';
}

BeerSong.prototype.verse = function (bottles) {
  return bottles !== 0 ? this.howMany(bottles) + this.takeOneDown(bottles - 1) : this.zeroBottles()
}

BeerSong.prototype.sing = function (start, end) {
  var endVal = end || 0;
  var verses = [];
  for (var i = start; i >= endVal; --i) {
    verses.push(this.verse(i))
  }
  return verses.join('\n')
}

module.exports = BeerSong;
