class CustomSet {
  constructor (contents) {
    this.contents = contents || [];
    if (this.contents.length > 0) {
      this.contents = this.contents.filter((item, pos, self) => self.indexOf(item) === pos);
    }
  }

  empty () {
    return this.contents.length === 0;
  }

  contains (elem) {
    return this.contents.indexOf(elem) !== -1;
  }

  subset (customSet) {
    const self = this;
    return customSet.empty() || customSet.contents.reduce((isSubset, item) => isSubset && self.contains(item), true);
  }

  disjoint (customSet) {
    if (customSet.empty()) return true;
    const self = this;
    let returnVal = true;
    customSet.contents.forEach((elem) => {
      if (self.contains(elem)) {
        returnVal = false;
      }
    })
    return returnVal;
  }

  eql (customSet) {
    return (this.empty() && customSet.empty()) || (this.subset(customSet) && customSet.subset(this));
  }

  add (elem) {
    if (!this.contains(elem)) {
      this.contents.push(elem);
      this.contents.sort();
    }
    return this;
  }

  intersection (customSet) {
    if (customSet.empty() || this.empty()) return new CustomSet();

    const i = new CustomSet();

    this.contents.forEach((elem) => {
      if (customSet.contains(elem)) {
        i.add(elem);
      }
    });

    return i;
  }

  union (customSet) {
    const u = new CustomSet();

    this.contents.forEach((elem) => {
      u.add(elem);
    });

    customSet.contents.forEach((elem) => {
      u.add(elem);
    });

    return u;
  }

  difference (customSet) {
    const d = new CustomSet();
    this.contents.forEach((elem) => {
      if (!customSet.contains(elem)) {
        d.add(elem);
      }
    });
    return d;
  }

  clear () {
    this.contents = [];
    return this;
  }

  size () {
    return this.contents.length;
  }

  toList () {
    return this.contents;
  }
}

module.exports = CustomSet;
