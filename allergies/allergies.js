const allergyList = [
   "eggs",
   "peanuts",
   "shellfish",
   "strawberries",
   "tomatoes",
   "chocolate",
   "pollen",
   "cats"
]

class Allergies {
  constructor(allergyRank) {
    this.rank = allergyRank % 256;
  }

  list() {
    return allergyList.filter((item) => this.allergicTo(item));
  }

  allergicTo(item) {
    const index = allergyList.indexOf(item);
    return (this.rank & Math.pow(2, index)) !== 0
  }
}

module.exports = Allergies;
