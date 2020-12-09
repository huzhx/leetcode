/**
 * @param {number[]} time
 * @return {number}
 */
const numPairsDivisibleBy60 = function(time) {
  if (time.length < 2) return 0;
  time.sort((a,b) => a-b);
  let ans = 0;
  for (let i = 0; i < time.length-1; i++) {
    let left = i;
    let right = time.length-1;
    while (left < right) {
      if ((time[left] + time[right])%60 === 0) {
        ans++;
      } else if (time[left]+time[right] < 60) {
        break;
      } 
      right--;
    }
  }
  return ans;  
}

module.exports = numPairsDivisibleBy60;
