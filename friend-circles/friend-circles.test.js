import friendCircles from './friend-circles';

test('test1', () => {
  const relationships = [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ];
  const result = friendCircles(relationships);
  const expected = 2;
  expect(result).toBe(expected);
});

test('test2', () => {
  const relationships = [
    [1, 1, 0],
    [1, 1, 1],
    [0, 1, 1],
  ];
  const result = friendCircles(relationships);
  const expected = 1;
  expect(result).toBe(expected);
});
