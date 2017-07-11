class LinkedList {
  constructor () {
    this.list = [];
  }

  push (value) {
    this.list.push(value);
  }

  pop () {
    return this.list.pop();
  }

  shift () {
    const returnVal = this.list[0];
    this.list = this.list.slice(1);
    return returnVal;
  }

  unshift (value) {
    this.list = [value].concat(this.list);
  }

  count () {
    return this.list.length;
  }

  delete (elem) {
    const index = this.list.indexOf(elem);
    this.list = this.list.slice(0, index).concat(this.list.slice(index + 1));
  }
}

module.exports = LinkedList;
