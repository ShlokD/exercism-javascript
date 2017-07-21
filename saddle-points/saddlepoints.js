const Matrix = require('../matrix/matrix.js');

class SaddlepointMatrix extends Matrix {
  constructor (repr) {
    super(repr);
    this.repr = repr;
    this.calcSaddlePoints();
  }

  calcSaddlePoints () {
    this.saddlePoints = [];
    const maxRow = this.rows.map((row) => Math.max.apply(null, row));
    const minCol = this.columns.map((column) => Math.min.apply(null, column));
    this.rows.forEach((row, rowIndex) => {
      row.forEach((element, colIndex) => {
        if (element === maxRow[rowIndex] && element === minCol[colIndex]) {
          this.saddlePoints.push([rowIndex, colIndex])
        }
      });
    })
  }
}

module.exports = SaddlepointMatrix;
