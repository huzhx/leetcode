const getPairs = (a, b, target) => {
  a.sort((a, b) => a[1] - b[1]);
  b.sort((a, b) => a[1] - b[1]);
  let result = [];
  let max = -Infinity;
  let aPtr = 0;
  let bPtr = b.length - 1;
  while (aPtr < a.length && bPtr >= 0) {
    const curSum = a[aPtr][1] + b[bPtr][1];
    if (curSum > target) {
      bPtr--;
    } else {
      if (curSum >= max) {
        if (curSum > max) {
          max = curSum;
          result = [];
        }
        result.push([a[aPtr][0], b[bPtr][0]]);
        let bIndex = bPtr - 1;
        const bCurVal = b[bPtr][1];
        while (bIndex >= 0 && b[bIndex][1] === bCurVal) {
          result.push([a[aPtr][0], b[bIndex][0]]);
          bIndex--;
        }
      }
      aPtr++;
    }
  }
  return result;
};

export default getPairs;
