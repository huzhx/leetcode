import { UnionFindByQuickUnion } from '../union-find/union-find';

const minCostToConnectNodes = (n, edges, costs) => {
  const unionFind = new UnionFindByQuickUnion(n);
  for (let [x, y] of edges) {
    unionFind.union(x - 1, y - 1);
  }
  let totalCost = 0;
  costs.sort((a, b) => a[2] - b[2]);
  for (let [x, y, cost] of costs) {
    const xParent = unionFind.find(x - 1);
    const yParent = unionFind.find(y - 1);
    if (xParent === yParent) continue;
    totalCost += cost;
    unionFind.union(xParent, yParent);
  }
  return totalCost;
};

export default minCostToConnectNodes;
