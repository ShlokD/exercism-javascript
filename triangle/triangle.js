class Triangle {
  constructor (sideA, sideB, sideC) {
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }

  sidesArePositive () {
    return this.sideA > 0 && this.sideB > 0 && this.sideC > 0
  }

  check () {
    return (this.sidesArePositive() &&
      this.sideA + this.sideB > this.sideC &&
      this.sideA + this.sideC > this.sideB &&
      this.sideC + this.sideB > this.sideA
    );
  }

  checkEquilateral () {
    return this.sideA + this.sideB + this.sideC === 3 * this.sideA;
  }

  checkIsosceles () {
    return this.sideA === this.sideB || this.sideB === this.sideC || this.sideA === this.sideC;
  }

  kind () {
    if (this.check()) {
      if (this.checkEquilateral()) {
        return 'equilateral';
      }
      return this.checkIsosceles() ? 'isosceles' : 'scalene';
    }
    throw new Error('Illegal Triangle Type')
  }
}

module.exports = Triangle;
