class Bucket {
  constructor (capacity) {
    this.capacity = capacity;
    this.contents = 0;
  }

  fill () {
    this.contents = this.capacity;
  }

  empty () {
    this.contents = 0;
  }

  isEmpty () {
    return this.contents === 0;
  }

  isFull () {
    return this.contents === this.capacity;
  }

  isPartiallyFull () {
    return this.contents > 0;
  }

  pourInto (bucket) {
    const quantity = Math.min(this.contents, bucket.capacity - bucket.contents);
    bucket.contents += quantity;
    this.contents -= quantity;
  }
}

class TwoBucket {
  constructor (b1, b2, goal, startBucket) {
    this.bucket1 = new Bucket(b1);
    this.bucket2 = new Bucket(b2);
    this.startBucket = startBucket;
    this.goal = goal;
    this.goalBucket = 0;
    this.otherBucket = 0;
    this.numMoves = 1;
    this.beginFill();
  }

  moves () {
    return this.numMoves;
  }

  check () {
    if (this.goal === this.bucket1.contents) {
      this.goalBucket = 'one';
      this.otherBucket = this.bucket2.contents;
      return true;
    } else if (this.goal === this.bucket2.contents) {
      this.goalBucket = 'two';
      this.otherBucket = this.bucket1.contents;
      return true;
    }

    return false;
  }

  beginFill () {
    if (this.startBucket === 'one') {
      this.bucket1.fill();
      this.startTransfer(this.bucket1, this.bucket2);
    } else {
      this.bucket2.fill();
      this.startTransfer(this.bucket2, this.bucket1);
    }
  }

  startTransfer (b1, b2) {
    while (true) {
      if (this.check()) { break; }
      if (this.numMoves === 0) {
        b1.pourInto(b2);
      } else if (b1.isEmpty()) {
        b1.fill();
      } else if (b1.isFull() && b2.isPartiallyFull()) {
        b1.pourInto(b2);
      } else if (b2.isFull()) {
        b2.empty();
      } else if (b2.isEmpty() && b1.isPartiallyFull()) {
        b1.pourInto(b2);
      }

      this.numMoves++;
    }
  }
};

module.exports = TwoBucket;
