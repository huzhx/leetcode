var sequentialDigits = function (low, high) {
  const res = [];
  helper(low, high);
  return res;

  function helper(low, high) {
    let lowStr = String(low);
    let lowLen = lowStr.length;

    let init = new Array(lowLen).fill().map((_, i) => i + 1);
    const queue = [Number(init.join(''))];
    while (queue.length) {
      const cur = queue.shift();
      if (cur >= low && cur <= high) {
        res.push(cur);
      }
      if (cur > high) break;
      const cur_arr = String(cur).split('');
      if (cur_arr[cur_arr.length - 1] < '9') {
        cur_arr.push(String(Number(cur_arr[cur_arr.length - 1]) + 1));
        cur_arr.shift();
        const newNum = Number(cur_arr.join(''));
        if (newNum <= high) queue.push(newNum);
      } else {
        const newNum = Number(
          new Array(cur_arr.length + 1)
            .fill()
            .map((_, i) => i + 1)
            .join('')
        );
        if (newNum <= high) queue.push(newNum);
      }
    }
  }
};

console.log(sequentialDigits(1234, 13000));
