const converses = {
  '{': '}',
  '(': ')',
  '[': ']'
}

const bracket = pattern => {
  const stack = [];
  pattern.split('').forEach(character => {
    if (converses[stack[stack.length - 1]] === character) {
      stack.pop();
    } else {
      stack.push(character);
    }
  });

  return stack.length === 0;
}
module.exports = bracket;
