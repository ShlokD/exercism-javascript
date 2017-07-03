class SpaceAge {
  constructor (age) {
    this.seconds = age
    this.mercuryAge = 0.2408467
    this.venusAge = 0.61519726
    this.marsAge = 1.8808158
    this.jupiterAge = 11.862615
    this.saturnAge = 29.447498
    this.uranusAge = 84.016846
    this.neptuneAge = 164.79132
  }

  formatAge (age) {
    return parseFloat(age.toFixed(2))
  }

  getEarthAge () {
    return this.seconds / 31557600
  }

  onEarth () {
    return this.formatAge(this.getEarthAge())
  }

  onMercury () {
    return this.formatAge(this.getEarthAge() / this.mercuryAge)
  }

  onVenus () {
    return this.formatAge(this.getEarthAge() / this.venusAge)
  }

  onMars () {
    return this.formatAge(this.getEarthAge() / this.marsAge)
  }

  onJupiter () {
    return this.formatAge(this.getEarthAge() / this.jupiterAge)
  }

  onSaturn () {
    return this.formatAge(this.getEarthAge() / this.saturnAge)
  }

  onUranus () {
    return this.formatAge(this.getEarthAge() / this.uranusAge)
  }

  onNeptune () {
    return this.formatAge(this.getEarthAge() / this.neptuneAge)
  }
}

module.exports = SpaceAge
