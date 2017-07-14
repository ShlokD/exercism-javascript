class Series {
  constructor (series) {
    this.series = series;
  }

  largestProduct (slice) {
    if (slice === 0) {
      return 1;
    }

    this.checkValidSeries(slice);

    let maxProduct = 0;
    for (let i = 0; i <= this.series.length - slice; i++) {
      const currentSlice = this.series.slice(i, i + slice);
      const currentProduct = currentSlice.split('').reduce((total, current) => total * parseInt(current), 1);
      maxProduct = Math.max(currentProduct, maxProduct);
    }
    return maxProduct;
  }

  checkValidSeries (slice) {
    if (slice > this.series.length) {
      throw new Error('Slice size is too big.')
    }

    if (slice <= 0 || !(/^\d+$/.test(this.series))) {
      throw new Error('Invalid input.')
    }
  }
}

module.exports = Series;
