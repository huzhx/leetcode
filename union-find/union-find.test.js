import { UnionFindByQuickFind, UnionFindByQuickUnion, UnionFindByQuickUnionWithRankOpt } from './union-find';

test('test-quickFind-1', () => {
  const N = 6;
  const edges = [
    [0, 3],
    [3, 4],
    [1, 2],
  ];
  const unionFind = new UnionFindByQuickFind(N);
  for (let [p, q] of edges) {
    unionFind.union(p, q);
  }
  const result = unionFind.getGroups();
  const expected = 3;
  expect(result).toBe(expected);
});

test('test-quickUnion-1', () => {
  const N = 6;
  const edges = [
    [0, 3],
    [3, 4],
    [1, 2],
  ];
  const unionFind = new UnionFindByQuickUnion(N);
  for (let [p, q] of edges) {
    unionFind.union(p, q);
  }
  const result = unionFind.getGroups();
  const expected = 3;
  expect(result).toBe(expected);
});

test('test-quickUnionWithRankOpt-1', () => {
  const N = 6;
  const edges = [
    [0, 3],
    [3, 4],
    [1, 2],
  ];
  const unionFind = new UnionFindByQuickUnionWithRankOpt(N);
  for (let [p, q] of edges) {
    unionFind.union(p, q);
  }
  const result = unionFind.getGroups();
  const expected = 3;
  expect(result).toBe(expected);
});
