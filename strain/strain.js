class Strain {
  keep (iterable, predicate) {
    return Array.prototype.filter.call(iterable, predicate);
  }

  discard (iterable, predicate) {
    return Array.prototype.filter.call(iterable, (elem) => !predicate(elem))
  }
}

module.exports = new Strain();
