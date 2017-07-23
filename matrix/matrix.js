class Matrix {
  constructor (repr) {
    this.repr = repr;
    this.calcRowsAndColumns();
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
}

module.exports = Matrix;
