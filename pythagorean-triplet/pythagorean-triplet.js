const sumFunc = (sum, value) => {
  sum += value;
  return sum;
};

const powerFunc = (product, value) => {
  product *= value;
  return product;
};

const squareFunc = (value) => value * value;

const range = (min, max) => {
  const rangeNum = [];
  for (let i = min; i <= max; ++i) {
    rangeNum.push(i);
  }
  return rangeNum;
}
const where = (factors) => {
  const { minFactor = 1, maxFactor = 1000, sum = 0 } = factors;
  const numbers = range(minFactor, maxFactor);
  const squares = numbers.map(squareFunc);
  const triplets = [];
  for (let i = 0; i < squares.length; ++i) {
    for (let j = i + 1; j < squares.length; ++j) {
      const sumSquares = squares[i] + squares[j];
      const index = squares.indexOf(sumSquares);
      if (index !== -1) {
        const triplet = new Triplet(numbers[i], numbers[j], numbers[index]);
        if (sum !== 0) {
          if (triplet.sum() === sum) {
            triplets.push(triplet);
          }
        } else {
          triplets.push(triplet);
        }
      }
    }
  }

  return triplets;
};

class Triplet {
  constructor (...args) {
    this.triplets = args;
    this.where = where;
  }

  sum () {
    return this.triplets.reduce(sumFunc, 0);
  }

  product () {
    return this.triplets.reduce(powerFunc, 1)
  }

  isPythagorean () {
    const squares = this.triplets.sort().map(squareFunc);
    return squares[0] + squares[1] === squares[2];
  }
};

module.exports.Triplet = Triplet;
module.exports.where = where;
