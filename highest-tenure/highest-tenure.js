const getHighestTenure = (tree) => {
  let highestTenure = 0;
  let output = null;
  helper(tree);
  return output;

  function helper(node) {
    if (node.children.length === 0) return [node.val, 1];

    let sum = node.val;
    let count = 1;

    for (let child of node.children) {
      const [childSum, childNumber] = helper(child);
      sum += childSum;
      count += childNumber;
    }

    const tenure = sum / count;
    if (tenure > highestTenure && count > 1) {
      output = node.val;
      highestTenure = tenure;
    }

    return [sum, count];
  }
};

export default getHighestTenure;
