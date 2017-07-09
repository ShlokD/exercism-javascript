const template = (word1, word2) => `For want of a ${word1} the ${word2} was lost.\n`;
const ending = (endingWord) => `And all for the want of a ${endingWord}.`;
class Proverb {
  constructor (...args) {
    this.words = args.filter((arg) => typeof arg === 'string');
    this.qualifierObj = args.find(arg => typeof arg === 'object');
  }

  toString () {
    let proverb = '';
    for (let i = 1; i < this.words.length; ++i) {
      proverb = proverb.concat(template(this.words[i - 1], this.words[i]));
    }
    const qualifier = this.qualifierObj ? this.qualifierObj.qualifier : '';
    const endingWord = qualifier.length > 0 ? `${qualifier} ${this.words[0]}` : this.words[0];
    proverb = proverb.concat(ending(endingWord));
    return proverb
  }
}

module.exports = Proverb;
