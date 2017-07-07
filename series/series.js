class Series {
  constructor (numStr) {
    this.numStr = numStr;
    this.digits = this.convertToInt(numStr);
  }

  convertToInt (str) {
    return str.split('').map((letter) => parseInt(letter));
  }

  slices (slice) {
    if (this.numStr.length > slice) {
      const slicesList = [];
      for (let i = 0; i < this.numStr.length; ++i) {
        const currentSlice = this.numStr.substr(i, slice);
        if (currentSlice.length === slice) {
          slicesList.push(this.convertToInt(currentSlice));
        }
      }
      return slicesList;
    } else if (this.numStr.length === slice) {
      return [this.convertToInt(this.numStr)];
    }
    throw new Error('Slice size is too big.');
  }
}

module.exports = Series;
