import dijkstrasAlg from './dijkstras-algorithm';

describe('dijkstrasAlg', () => {
  it('should return 6', () => {
    const edges = [
      ['A', 'B', 4],
      ['A', 'C', 2],
      ['B', 'C', 1],
      ['B', 'D', 2],
      ['B', 'E', 3],
      ['C', 'E', 1],
      ['E', 'D', 5],
    ];
    const start = 'A';
    const end = 'D';
    const nodes = ['A', 'B', 'C', 'D', 'E'];
    const result = dijkstrasAlg(edges, start, end, nodes);
    const expected = 6;
    expect(result).toBe(expected);
  });
});
