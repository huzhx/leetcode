const combine = function(n, k) {
  let ans = [];
  backtrack();
  return ans;

  function backtrack(first = 1, cur = []) {
    if (cur.length === k) {
      ans.push(cur.slice());
    }
    for (let i = first; i < n + 1; i++) {
      cur.push(i);
      backtrack(i + 1, cur);
      cur.pop();
    }
  }
};

combine(4, 2);
