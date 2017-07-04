class Crypto {
  constructor (text) {
    this.text = text;
  }

  normalizePlaintext () {
    return this.text.toLowerCase().replace(/[^a-z0-9]/g, '');
  }

  size () {
    return Math.ceil(Math.sqrt(this.normalizePlaintext().length));
  }

  plaintextSegments () {
    const size = this.size();
    return this.normalizePlaintext().match(new RegExp(`.{1,${size}}`, 'g'));
  }

  ciphertext () {
    const chunks = this.plaintextSegments();
    const size = this.size();
    let cipherText = '';
    for (let i = 0; i < chunks.length; ++i) {
      for (let j = 0; j < size; ++j) {
        cipherText = cipherText.concat(chunks[j][i] || '')
      }
    }
    return cipherText;
  }
}

module.exports = Crypto;
