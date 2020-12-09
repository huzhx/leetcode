/**
 * @param {number[]} time
 * @return {number}
 */
const numPairsDivisibleBy60 = function(time) {
  if (time.length < 2) return 0;
  let count = 0;
  const remainder = new Array(60).fill(0);
  for (let atime of time) {
    if (atime%60 === 0) {
      count += remainder[0];
    } else {
      count += remainder[60 - atime%60];
    }
    remainder[atime%60]++;
  }
  return count;  
}

module.exports = numPairsDivisibleBy60;
