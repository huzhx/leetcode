const friendCircles = (relationships) => {
  const unionFind = new UnionFind();
  for (let i = 0; i < relationships.length; i++) {
    for (let j = 0; j < relationships[i].length; j++) {
      if (relationships[i][j] === 1) {
        unionFind.union(i, j);
      }
    }
  }

  return unionFind.size();
};

class UnionFind {
  constructor() {
    this.parent = {};
  }

  find(x) {
    let res = this.parent[x] || x;
    if (res !== x) {
      this.parent[x] = res = this.find(res);
    }
    return res;
  }

  union(x, y) {
    this.parent[this.find(y)] = this.find(x);
  }

  size() {
    return new Set(Object.values(this.parent)).size;
  }
}

export default friendCircles;
