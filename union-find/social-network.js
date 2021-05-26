export class UnionFind {
  constructor(n) {
    this.parent = [];
    this.children = [];
    this.rank = [];
    for (let i = 1; i <= n; i++) {
      this.parent[i] = i;
      this.children[i] = 1;
      this.rank[i] = 1;
    }
  }

  find(x) {
    if (x !== this.parent[x]) {
      this.parent[x] = this.find(this.parent[x]);
    }
    return this.parent[x];
  }

  union(x, y) {
    const parentX = this.find(x);
    const parentY = this.find(y);
    if (parentX === parentY) return;

    const rankX = this.rank[parentX];
    const rankY = this.rank[parentY];

    if (rankX > rankY) {
      this.parent[y] = parentX;
      this.children[parentX] += this.children[parentY];
    } else if (rankX < rankY) {
      this.parent[x] = parentY;
      this.children[parentY] += this.children[parentX];
    } else {
      this.parent[y] = parentX;
      this.rank[parentX]++;
      this.children[parentX] += this.children[parentY];
    }
  }

  isConnected(x, y) {
    return this.find(x) === this.find(y);
  }

  getGroupSize(x) {
    return this.children[this.find(x)];
  }
}
