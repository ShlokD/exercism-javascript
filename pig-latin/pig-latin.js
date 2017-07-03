const suffix = 'ay';
const vowels = 'aeiou';

const isVowel = letter => vowels.indexOf(letter) !== -1;

const isQu = (word, i) => {
  return i > 0 && (word[i] === 'u' && word[i - 1] === 'q')
};

const pigLatinize = (word) => {
  let i = 0;
  for(i = 0; i < word.length; ++i) {
    if (isQu(word, i)) {
     continue;
   } else if(isVowel(word[i])) {
      break;
    }
  }

  return word.substr(i, word.length) + word.substr(0, i) + suffix;
}

const translate = (phrase) => phrase.split(' ').map((word) => pigLatinize(word)).join(' ');

const pigLatin = {
  translate
}

module.exports = pigLatin;
