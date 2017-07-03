class PerfectNumbers {
  factorize (number) {
    const factors = [];

    for (let i = 1; i < number; ++i) {
      if (number % i === 0) {
        factors.push(i);
      }
    }

    return factors;
  }

  classify (num) {
    if (num > 0) {
      const factors = this.factorize(num);
      const sum = factors.reduce((factor, acc) => acc + factor, 0);
      if (sum === num) {
        return 'perfect'
      } else if (sum > num) {
        return 'abundant'
      }

      return 'deficient';
    }

    return 'Classification is only possible for natural numbers.';
  }
}

module.exports = PerfectNumbers;
