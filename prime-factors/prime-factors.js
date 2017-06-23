class PrimeFactors {
  for(num) {
    const pFactors = [];
    if(num > 1) {
      if(num === 3) return [3];

      while(num % 2 === 0) {
        num = num / 2;
        pFactors.push(2);
      }
    }

    for(let i = 3; i <= num; i += 2) {
      while(num % i === 0) {
        num = num / i;
        pFactors.push(i);
      }
    }
    return pFactors;
  }
}

module.exports = new PrimeFactors()
