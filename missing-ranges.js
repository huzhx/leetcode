const findMissingRanges = function(nums, lower, upper) {
  const ans = [];
  if (nums.length === 0) {
    ans.push(formatAns(lower, upper));
  } else if (nums.length === 1) {
    const left = formatAns(lower, nums[0]-1);
    const right = formatAns(nums[0]+1, upper);
    if (left) ans.push(left);
    if (right) ans.push(right);
  } else {
    for (let i = 0; i < nums.length; i++) {
      if (i === 0) {
        const left = formatAns(lower, nums[0]-1);
        if (left) ans.push(left);
      } 
      if (i < nums.length-1) {
        const right = formatAns(nums[i]+1, nums[i+1]-1);
        if (right) ans.push(right);
      } else {
        const right = formatAns(nums[i]+1, upper);
        if (right) ans.push(right);
      }
    }

  }

  return ans;
};

function formatAns(lower, upper) {
  if (lower === upper) {
    return lower.toString();
  } else if (lower < upper) {
    return `${lower}->${upper}`
  } else {
    return '';
  }
}

module.exports = findMissingRanges;
