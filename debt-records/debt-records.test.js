import getSmallestNegatives from './debt-records';

test('test1', () => {
  const numCols = 3;
  const numRows = 6;
  const debts = [
    ['Alex', 'Blake', 2],
    ['Blake', 'Alex', 2],
    ['Casey', 'Alex', 5],
    ['Blake', 'Casey', 7],
    ['Alex', 'Blake', 4],
    ['Alex', 'Casey', 4],
  ];
  const expected = ['Alex', 'Blake'];
  const result = getSmallestNegatives(numCols, numRows, debts);
  expect(result).toEqual(expected);
});

test('test2', () => {
  const numCols = 3;
  const numRows = 2;
  const debts = [
    ['Alex', 'Blake', 2],
    ['Blake', 'Alex', 2],
  ];
  const expected = ['Nobody has a negative balance'];
  const result = getSmallestNegatives(numCols, numRows, debts);
  expect(result).toEqual(expected);
});
