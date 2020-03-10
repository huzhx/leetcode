var generateParenthesis = function(n) {
  let ans = [];

  function backtrack(s = '', left = 0, right = 0) {
    console.log({ s });
    if (s.length === 2 * n) {
      ans.push(s);
      return;
    }
    if (left < n) {
      backtrack(s + '(', left + 1, right);
    }
    if (right < left) {
      backtrack(s + ')', left, right + 1);
    }
  }

  backtrack();
  return ans;
};

generateParenthesis(3);
