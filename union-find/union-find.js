class UnionFindByQuickFind {
  constructor(elementsNum) {
    this.id = [];
    this.groups = elementsNum;
    for (let i = 0; i < elementsNum; i++) {
      this.id[i] = i;
    }
  }

  /**
   * O(1)
   * @param {*} p
   * @returns id of p
   */
  find(p) {
    if (p < 0 && p >= this.id.length) {
      throw new Error('p is out of bound');
    }
    return this.id[p];
  }

  isConnected(p, q) {
    return this.find(p) === this.find(q);
  }

  /**
   * O(n)
   * @param {*} p
   * @param {*} q
   * @returns null
   */
  union(p, q) {
    const pId = this.find(p);
    const qId = this.find(q);
    if (pId === qId) return;
    for (let i = 0; i < this.id.length; i++) {
      if (this.id[i] === pId) {
        this.id[i] = qId;
      }
    }
    this.groups--;
  }

  getGroups() {
    return this.groups;
  }
}

class UnionFindByQuickUnion {
  constructor(elementsNum) {
    this.parent = []; // track the parent id of each element
    this.children = []; // track the number of elements in each group rooted by i
    this.groups = elementsNum;
    for (let i = 0; i < elementsNum; i++) {
      this.parent[i] = i;
      this.children[i] = 1;
    }
  }

  /**
   * O(h) where h is the height of the tree
   * @param {*} p
   * @returns
   */
  find(p) {
    while (p !== this.parent[p]) {
      p = this.parent[p];
    }
    return p;
  }

  /**
   * O(h)
   * @param {*} p
   * @param {*} q
   * @returns
   */
  isConnected(p, q) {
    return this.find(p) === this.find(q);
  }

  /**
   * O(h)
   * @param {*} p
   * @param {*} q
   * @returns
   */
  union(p, q) {
    const pParent = this.find(p);
    const qParent = this.find(q);
    if (pParent === qParent) return;

    if (this.children[pParent] > this.children[qParent]) {
      this.children[pParent] += this.children[qParent];
      this.parent[qParent] = pParent;
    } else {
      this.children[qParent] += this.children[pParent];
      this.parent[pParent] = qParent;
    }

    this.groups--;
  }

  getGroups() {
    return this.groups;
  }
}

class UnionFindByQuickUnionWithRankOpt {
  constructor(elementsNum) {
    this.parent = []; // track the parent id of each element
    this.rank = []; // track the ~height of the tree rooted by i
    this.groups = elementsNum;
    for (let i = 0; i < elementsNum; i++) {
      this.parent[i] = i;
      this.rank[i] = 1;
    }
  }

  /**
   * O(h) where h is the height of the tree
   * @param {*} p
   * @returns
   */
  find(p) {
    if (p !== this.parent[p]) {
      this.parent[p] = this.find(this.parent[p]);
    }
    return p;
  }

  /**
   * O(h)
   * @param {*} p
   * @param {*} q
   * @returns
   */
  isConnected(p, q) {
    return this.find(p) === this.find(q);
  }

  /**
   * O(h)
   * @param {*} p
   * @param {*} q
   * @returns
   */
  union(p, q) {
    const pParent = this.find(p);
    const qParent = this.find(q);
    if (pParent === qParent) return;

    if (this.rank[pParent] > this.rank[qParent]) {
      this.parent[qParent] = pParent;
    } else if (this.rank[qParent] > this.rank[pParent]) {
      this.parent[pParent] = qParent;
    } else {
      this.parent[pParent] = qParent;
      this.rank[qParent]++;
    }

    this.groups--;
  }

  getGroups() {
    return this.groups;
  }
}

export { UnionFindByQuickFind, UnionFindByQuickUnion, UnionFindByQuickUnionWithRankOpt };
