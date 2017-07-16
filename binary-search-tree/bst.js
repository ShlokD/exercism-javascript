class Bst {
  constructor (value) {
    this.data = value;
    this.left = null;
    this.right = null;
  }

  insert (value) {
    let currentNode = this;
    const newNode = new Bst(value);
    while (currentNode) {
      if (value <= currentNode.data) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          break;
        } else {
          currentNode = currentNode.left;
        }
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          break;
        } else {
          currentNode = currentNode.right;
        }
      }
    }
  }

  each (callback) {
    if (this.left) {
      this.left.each(callback);
    }

    callback(this.data);

    if (this.right) {
      this.right.each(callback);
    }
  }
}

module.exports = Bst;
