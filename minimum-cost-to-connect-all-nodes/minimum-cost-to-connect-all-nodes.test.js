import minCostToConnectNodes from './minimum-cost-to-connect-all-nodes';

test('test1', () => {
  const n = 6;
  const edges = [
    [1, 4],
    [4, 5],
    [2, 3],
  ];
  const costs = [
    [1, 2, 5],
    [1, 3, 10],
    [1, 6, 2],
    [5, 6, 5],
  ];
  const result = minCostToConnectNodes(n, edges, costs);
  const expected = 7;
  expect(result).toBe(expected);
});
