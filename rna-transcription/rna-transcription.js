var DnaTranscriber = function(){}

DnaTranscriber.prototype.toRna = function(rnaString) {
  if(!rnaString.match(/^[ACGT]+$/)) {
    throw new Error('Invalid input')
  }

  var mapping = {
    'C': 'G',
    'G': 'C',
    'A': 'U',
    'T': 'A'
  }

  return rnaString.split('').map(function(elem) {
    return mapping[elem]
  }).join('');
}
module.exports = DnaTranscriber
