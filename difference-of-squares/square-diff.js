class Squares {
  constructor (limit) {
    this.n = limit;
    this.squareOfSums = this.getSquareOfSums();
    this.sumOfSquares = this.getSumOfSquares();
    this.difference = Math.abs(this.sumOfSquares - this.squareOfSums);
  }

  getSquareOfSums () {
    const sumUptoLimit = (this.n * (this.n + 1)) / 2;
    return sumUptoLimit * sumUptoLimit;
  }

  getSumOfSquares () {
    return (this.n * (this.n + 1) * (2 * this.n + 1)) / 6;
  }
}

module.exports = Squares;
