const countTeams = (num, skills, minAssociates, minLevel, maxLevel) => {
  const skillsTar = skills.filter((skill) => skill >= minLevel && skill <= maxLevel);
  let output = 0;
  for (let associates = minAssociates; associates <= skillsTar.length; associates++) {
    output += countTeamsByAssociates(skillsTar, associates);
  }
  return output;

  function countTeamsByAssociates(skillsTar, associates) {
    const memo = {};
    return helper(skillsTar, 0, 0);

    function helper(skillsTar, curIndex, curTotal) {
      if (curIndex === skillsTar.length) {
        if (curTotal === associates) return 1;
        else return 0;
      }

      memo[curIndex] = memo[curIndex] || [];
      if (typeof memo[curIndex][curTotal] !== 'undefined') {
        return memo[curIndex][curTotal];
      }

      const count1 = helper(skillsTar, curIndex + 1, curTotal + 1);
      const count2 = helper(skillsTar, curIndex + 1, curTotal);

      memo[curIndex][curTotal] = count1 + count2;
      return memo[curIndex][curTotal];
    }
  }
};

export default countTeams;
