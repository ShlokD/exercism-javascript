class RLE {
  encode (plainString) {
    const letters = plainString.split('');
    const encoded = [];
    let prev = letters[0];
    let currentCount = 1;
    for (let i = 1; i <= letters.length; ++i) {
      if (letters[i] === prev) {
        currentCount++;
      } else {
        if (currentCount > 1) {
          encoded.push(String(currentCount), prev);
        } else {
          encoded.push(prev);
        }
        currentCount = 1;
        prev = letters[i];
      }
    }
    return encoded.join('');
  }

  decode (encodedString) {
    return encodedString.replace(/(\d+)([a-zA-Z\s])/g, (match, count, letter) => new Array(parseInt(count, 10) + 1).join(letter));
  }
}

module.exports = new RLE();
