var Anagram = function (word) {
  this.word = word;
}

Anagram.prototype.matchOne = function (checkWord) {
  if (checkWord.length !== this.word.length || checkWord.toLowerCase() === this.word.toLowerCase()) {
    return false
  }

  var letters = this.word.toLowerCase().split('');
  var letterMap = {};
  var returnVal = true;
  letters.forEach(function (letter) {
    if (letterMap.hasOwnProperty(letter)) {
      letterMap[letter]++;
    } else {
      letterMap[letter] = 1
    }
  });

  var checkLetters = checkWord.toLowerCase().split('');

  checkLetters.forEach(function (checkLetter) {
    if (letterMap.hasOwnProperty(checkLetter)) {
      letterMap[checkLetter]--;
      if (letterMap[checkLetter] === 0) {
        delete letterMap[checkLetter]
      }
    } else {
      returnVal = false;
    }
  })
  return returnVal;
}

Anagram.prototype.matches = function () {
  var wordList = [].concat.apply([], Array.prototype.slice.call(arguments));
  var self = this;
  return wordList.filter(function (word) {
    return self.matchOne(word)
  });
}

module.exports = Anagram;
