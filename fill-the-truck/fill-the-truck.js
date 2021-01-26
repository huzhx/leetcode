const getMaxUnits = (boxes, unitsPerBox, truckSize) => {
  const memo = {};
  return helper(boxes, 0, [], truckSize);

  function helper(boxes, curIndex, tmp, remSize) {
    memo[curIndex] = memo[curIndex] || [];

    if (typeof memo[curIndex][remSize] !== 'undefined') {
      return memo[curIndex][remSize];
    }

    if (remSize === 0) {
      return 0;
    }
    if (boxes.length === 0 || curIndex === boxes.length) return 0;

    let maxUnits = 0;

    for (let i = curIndex; i < boxes.length; i++) {
      if (remSize - boxes[i] >= 0) {
        tmp.push(boxes[i]);
        maxUnits = Math.max(maxUnits, boxes[i] * unitsPerBox[i] + helper(boxes, i + 1, tmp, remSize - boxes[i]));
        tmp.pop();
      }
    }

    memo[curIndex][remSize] = maxUnits;
    return memo[curIndex][remSize];
  }
};

export default getMaxUnits;
