var Isogram =  function (word) {
  this.word =  word.toLowerCase().split('-').join('').split(' ').join('');
}

Isogram.prototype.isIsogram = function() {
  var letters = this.word.split('');
  var returnValue = true;
  var letterMap = {};
  letters.forEach(function(letter) {
    if(letterMap.hasOwnProperty(letter)) {
      returnValue = false;
    } else {
      letterMap[letter] = true;
    }
  });

  return returnValue;
}

module.exports = Isogram;
