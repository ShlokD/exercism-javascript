const alphabets = 'abcdefghijklmnopqrstuvwxyz';
const transpose = 'zyxwvutsrqponmlkjihgfedcba';

const clean = (sentence) => {
  return sentence.trim().toLowerCase().replace(/\s/g, '').match(/\w+/g).join('');
};

const encode = (sentence) => {
  const cleanSentence = clean(sentence);
  return cleanSentence
          .split('')
          .map((letter, index) => {
          const transposeLetter = transpose[alphabets.indexOf(letter)]  || letter;
          return index % 5 ? transposeLetter : " "+transposeLetter;
          })
          .join('')
          .trim();
};

const atbashCipher = {
  encode
}

module.exports = atbashCipher;
