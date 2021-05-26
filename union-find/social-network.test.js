import { UnionFind } from './social-network';

describe('set up a graph to store the friends in a community', () => {
  it('returns 6 for people 1, 2, 3, 4, 5, 6 and returns 1 for person 7', () => {
    const unionfind = new UnionFind(7);
    unionfind.union(1, 4);
    unionfind.union(4, 5);
    unionfind.union(3, 6);
    unionfind.union(1, 5);
    unionfind.union(2, 5);
    unionfind.union(4, 3);
    for (let i = 1; i <= 6; i++) {
      expect(unionfind.getGroupSize(i)).toBe(6);
    }
    expect(unionfind.getGroupSize(7)).toBe(1);
  });
});
