class School {
  constructor () {
    this.rosterList = {}
  }

  roster () {
    const sortedRoster = {}
    Object.keys(this.rosterList).sort().forEach((key) => {
      sortedRoster[key] = this.rosterList[key].sort()
    })
    return sortedRoster;
  }

  add (name, grade) {
    if (!this.rosterList.hasOwnProperty(grade)) {
      this.rosterList[grade] = []
    }
    this.rosterList[grade].push(name)
  }

  grade (gradeId) {
    var gradeRoster = this.rosterList[gradeId];
    return gradeRoster ? gradeRoster.sort() : []
  }
}

module.exports = School;
