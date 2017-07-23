class Queens {
  constructor (positions = {}) {
    const {
      white = [0, 3],
      black = [7, 3]
    } = positions;

    this.white = white;
    this.black = black;

    if (this.white === this.black) {
      throw new Error('Queens cannot share the same space');
    }
  }

  toString () {
    let rows = [];
    for (let i = 0; i < 8; ++i) {
      rows[i] = ['_', '_', '_', '_', '_', '_', '_', '_'];
      for (let j = 0; j < 8; ++j) {
        if (i === this.white[0] && j === this.white[1]) {
          rows[i][j] = 'W'
        } else if (i === this.black[0] && j === this.black[1]) {
          rows[i][j] = 'B'
        }
      }

      rows[i] = rows[i].join(' ');
    }

    return rows.join('\n');
  }

  canAttack () {
    return this.white[0] === this.black[0] ||
     this.white[1] === this.black[1] ||
     Math.abs(this.white[0] - this.black[0]) === Math.abs(this.white[1] - this.black[1]);
  }
}

module.exports = Queens;
