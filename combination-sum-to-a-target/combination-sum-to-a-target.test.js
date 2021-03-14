import getNumberOfOptions from './combination-sum-to-a-target';

test('test1', () => {
  const a = [2, 3, 5];
  const b = [5];
  const c = [2, 3, 10];
  const d = [1, 2];
  const limit = 11;
  const expected = 4;
  const result = getNumberOfOptions(a, b, c, d, limit);
  expect(result).toBe(expected);
});
