class List {
  constructor (items = []) {
    this.items = items;
  }

  compare (list) {
    const listRepr = list.items.join('');
    const thisRepr = this.items.join('');

    if (listRepr === thisRepr && this.items.length === list.items.length) {
      return 'EQUAL';
    }

    if (listRepr === thisRepr && this.items.length !== list.items.length) {
      return 'UNEQUAL';
    }

    if (listRepr.indexOf(thisRepr) !== -1) {
      return 'SUBLIST';
    }

    if (thisRepr.indexOf(listRepr) !== -1) {
      return 'SUPERLIST';
    }

    return 'UNEQUAL';
  }
}

module.exports = List;
