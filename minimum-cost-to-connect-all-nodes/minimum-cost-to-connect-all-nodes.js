const minCostToConnectNodes = (n, edges, costs) => {
  const unionFind = new UnionFind();
  for (let [x, y] of edges) {
    unionFind.union(x, y);
  }
  let totalCost = 0;
  costs.sort((a, b) => a[2] - b[2]);
  for (let [x, y, cost] of costs) {
    const xParent = unionFind.find(x);
    const yParent = unionFind.find(y);
    if (xParent === yParent) continue;
    totalCost += cost;
    unionFind.union(xParent, yParent);
  }
  return totalCost;
};

class UnionFind {
  constructor() {
    this.parent = {};
  }

  find(x) {
    let y = this.parent[x] || x;
    if (y !== x) {
      this.parent[x] = y = this.find(y);
    }
    return y;
  }

  union(x, y) {
    this.parent[this.find(x)] = this.find(y);
  }
}

export default minCostToConnectNodes;
