class Words {
  cleanSentence(sentence) {
    return sentence.trim().toLowerCase().replace(/[.\/#!$%\^&\*;:{}=\-_`~()@?¡¿\u0091]/g, "").replace(/\s+/g, " ");
  }

  count(sentence) {
    return this.cleanSentence(sentence).split(/[\s\,\n]/).reduce((counter, word) => {
      if(word.charAt(0) === "'" && word.charAt(word.length - 1) === "'") {
        word = word.substr(1, word.length - 2);
      }
      if(Object.hasOwnProperty.call(counter, word)) {
        counter[word] += 1
      } else {
        counter[word] = 1;
      }

      return counter;
    }, {})
  }
}

module.exports = Words;
