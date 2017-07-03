var Hamming = function () {}

Hamming.prototype.compute = function (first, second) {
  if (first.length !== second.length) {
    throw new Error('DNA strands must be of equal length.')
  }

  if (first === second) return 0
  var hammingCode = 0;

  for (var i = 0; i < first.length; ++i) {
    if (first.charAt(i) !== second.charAt(i)) {
      hammingCode++
    }
  }

  return hammingCode
}

module.exports = Hamming
