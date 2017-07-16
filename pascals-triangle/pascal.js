class Triangle {
  constructor (order) {
    this.order = order;
    this.calculateRows();
  }

  calculateRows () {
    this.rows = [];
    for (let rowNo = 1; rowNo <= this.order; ++rowNo) {
      let currentRow = [];
      let pointer = 1;
      for (let i = 1; i <= rowNo; ++i) {
        currentRow.push(pointer);
        pointer = pointer * (rowNo - i) / i;
      }
      this.rows.push(currentRow);
    }
    this.lastRow = this.rows[this.rows.length - 1];
  }
};

module.exports = Triangle;
