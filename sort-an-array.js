const sortArray = function(nums) {
  if (nums.length === 0 || nums.length === 1) return nums;
  let pivot = Math.floor(nums.length / 2);
  let left = sortArray(nums.slice(0, pivot));
  let right = sortArray(nums.slice(pivot));
  return merge(left, right);

  function merge(left, right) {
    let answer = [];
    let leftPtr = (rightPtr = 0);
    while (leftPtr < left.length && rightPtr < right.length) {
      if (left[leftPtr] <= right[rightPtr]) {
        answer.push(left[leftPtr]);
        leftPtr++;
      } else {
        answer.push(right[rightPtr]);
        rightPtr++;
      }
    }
    answer = [...answer, ...left.slice(leftPtr), ...right.slice(rightPtr)];
    return answer;
  }
};

console.log(sortArray([5, 2, 3, 1]));
