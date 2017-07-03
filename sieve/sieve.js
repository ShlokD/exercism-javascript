class Sieve {
  constructor (number) {
    this.number = number;
    this.primes = [];
    this.getPrimes();
  }

  isPrime (n) {
    if (n !== 2 && n % 2 === 0) {
      return false
    } else {
      for (let i = 3; i < n; i += 2) {
        if (n % i === 0) {
          return false;
        }
      }
      return true;
    }
  }

  getPrimes () {
    for (let i = 2; i <= this.number; ++i) {
      if (this.isPrime(i)) {
        this.primes.push(i);
      }
    }
  }
}

module.exports = Sieve;
