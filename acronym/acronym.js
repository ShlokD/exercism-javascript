class Acronyms {
  parse(phrase) {
    return phrase.split(' ').map(
      (word) => word
      .replace(/([a-z])([A-Z])/g, '$1 $2')
      .trim()
      .match(/\w+/g)
      .map((word) => word.charAt(0).toUpperCase())
      .join('')
    ).join('');
  }
}

module.exports = new Acronyms();
