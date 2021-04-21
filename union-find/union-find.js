class UnionFindByQuickFind {
  constructor(elementsNum) {
    this.id = [];
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
  }

  getGroups() {
    return new Set(this.id).size;
  }
}

class UnionFindByQuickUnion {
  constructor(elementsNum) {
    this.parent = [];
    for (let i = 0; i < elementsNum; i++) {
      this.parent[i] = i;
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
    this.parent[pParent] = qParent;
  }

  getGroups() {
    const set = new Set();
    for (let i = 0; i < this.parent.length; i++) {
      const iParent = this.find(i);
      set.add(iParent);
    }
    return set.size;
  }
}

export { UnionFindByQuickFind, UnionFindByQuickUnion };
