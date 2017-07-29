class Palindromes {
  constructor (args) {
    this.min = args.minFactor || 1;
    this.max = args.maxFactor;
  }

  isPalindrome (num) {
    return num === num.split('').reverse().join('');
  }

  generate () {
    this.allPalindromeProducts = [Infinity, 0];
    this.allPalindromeFactors = [];
    const memo = {};
    for (let i = this.min; i <= this.max; ++i) {
      for (let j = i; j <= this.max; ++j) {
        const product = i * j;
        if ((memo.hasOwnProperty(product) && memo[product]) || this.isPalindrome(String(product))) {
          if (product > this.allPalindromeProducts[1]) {
            this.allPalindromeProducts[1] = product;
          }

          if (product < this.allPalindromeProducts[0]) {
            this.allPalindromeProducts[0] = product;
          }

          this.allPalindromeFactors.push({
            palindrome: product,
            x: i,
            y: j
          });

          memo[product] = true;
        } else {
          memo[product] = false;
        }
      }
    }
  }

  largest () {
    return this.getPalindromeAndFactors(-1);
  }

  smallest () {
    return this.getPalindromeAndFactors(0);
  }

  getPalindromeAndFactors (sliceFactor) {
    const value = this.allPalindromeProducts.slice(sliceFactor)[0];
    const factors = this.allPalindromeFactors.reduce((allFactors, currentFactor) => {
      if (currentFactor.palindrome === value) {
        allFactors.push([currentFactor.x, currentFactor.y]);
      }
      return allFactors;
    }, []);
    return {
      value,
      factors
    }
  }
}

module.exports = Palindromes;
