const isValid = function(str) {
  if (!str) return true;

  let stack = [];

  const open = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  const close = {
    ')': true,
    ']': true,
    '}': true,
  };

  for (let char of str) {
    if (open[char]) {
      stack.push(open[char]);
    }
    if (close[char]) {
      let cur = stack.pop();
      if (char !== cur) return false;
    }
  }

  return stack.length === 0;
};

console.log(isValid('{[]}'));
console.log(isValid('{[(]}'));
