var Bob = function () {}

Bob.prototype.hey = function (greeting) {
  if (greeting === greeting.toUpperCase() && /[A-Z]/.test(greeting)) {
    return 'Whoa, chill out!'
  } else if (greeting.substr(-1) === '?') {
    return 'Sure.'
  } else if (/^\s*$/.test(greeting)) {
    return 'Fine. Be that way!'
  } else return 'Whatever.'
}

module.exports = Bob;
