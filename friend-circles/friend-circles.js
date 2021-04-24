import { UnionFindByQuickUnionWithRankOpt } from '../union-find/union-find';

const friendCircles = (relationships) => {
  const unionFind = new UnionFindByQuickUnionWithRankOpt(relationships.length);
  for (let i = 0; i < relationships.length; i++) {
    for (let j = i + 1; j < relationships[i].length; j++) {
      if (relationships[i][j] === 1) {
        unionFind.union(i, j);
      }
    }
  }

  return unionFind.getGroups();
};

export default friendCircles;
