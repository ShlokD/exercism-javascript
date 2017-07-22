class SumOfMultiples {
  constructor (numbers) {
    this.numbers = numbers;
  }

  to (end) {
    let sum = 0;
    const multiples = new Set();
    this.numbers.forEach((number) => {
      for (let i = number; i < end; i += number) {
        multiples.add(i);
      }
    });

    for (let item of multiples) {
      sum += item;
    }
    return sum;
  }
}

module.exports = SumOfMultiples;
