const defaultChildrenList = ['alice', 'bob', 'charlie', 'david', 'eve', 'fred', 'ginny', 'harriet', 'ileana', 'joseph', 'kincaid', 'larry'];

const plantMaps = {
  'C': 'clover',
  'G': 'grass',
  'R': 'radishes',
  'V': 'violets'
}
class Garden {
  constructor (arrangement, children) {
    this.arrangement = arrangement;
    this.childrenList = children ? children.sort().map((child) => child.toLowerCase()) : defaultChildrenList;
    return this.calculateRows();
  }

  calculateRows () {
    const rows = this.arrangement.split('\n');
    let rowsObj = {};
    for (let i = 0; i < rows.length; ++i) {
      const currentRow = rows[i];
      const cups = currentRow.match(/.{1,2}/g);
      cups.forEach((cup, index) => {
        const plants = cup.split('').map((c) => plantMaps[c]);
        if (rowsObj.hasOwnProperty(this.childrenList[index])) {
          const currentPlants = rowsObj[this.childrenList[index]];
          rowsObj[this.childrenList[index]] = currentPlants.concat(plants);
        } else {
          rowsObj[this.childrenList[index]] = plants;
        }
      });
    }
    return rowsObj;
  }
}

module.exports = Garden;
