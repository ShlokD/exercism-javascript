class Matrix {
  constructor (repr) {
    this.repr = repr;
    this.calcRowsAndColumns();
    this.calcSaddlePoints();
  }

  calcRowsAndColumns () {
    const splitRepr = this.repr.split('\n');
    this.rows = splitRepr.map((stringRow) => {
      return stringRow.split(' ').map((num) => parseInt(num));
    });

    this.columns = this.calcColumns();
  }

  calcColumns () {
    let cols = [];
    if (this.rows) {
      for (let i = 0; i < this.rows.length; ++i) {
        let currentCol = [];
        for (let j = 0; j < this.rows.length; ++j) {
          currentCol.push(this.rows[j][i]);
        }
        cols.push(currentCol);
      }
    }
    return cols;
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

module.exports = Matrix;
