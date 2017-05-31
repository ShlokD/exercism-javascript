var Gigasecond = function(date) {
  this.gsDate = date
}

Gigasecond.prototype.date = function() {
  return new Date(this.gsDate.getTime() + Math.pow(10, 12))
}
module.exports = Gigasecond
