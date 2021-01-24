import getItems from './items-in-containers';

test('test1', () => {
  const s = '|**|*|*';
  const startIndices = [1, 1];
  const endIndices = [5, 6];
  const result = getItems(s, startIndices, endIndices);
  const expected = [2, 3];
  expect(result).toEqual(expected);
});

test('test2', () => {
  const s = '*|*|';
  const startIndices = [1];
  const endIndices = [3];
  const result = getItems(s, startIndices, endIndices);
  const expected = [0];
  expect(result).toEqual(expected);
});

test('test3', () => {
  const s = '*|**|';
  const startIndices = [2];
  const endIndices = [3];
  const result = getItems(s, startIndices, endIndices);
  const expected = [0];
  expect(result).toEqual(expected);
});

test('test4', () => {
  const s = '*|**|***|';
  const startIndices = [3];
  const endIndices = [8];
  const result = getItems(s, startIndices, endIndices);
  const expected = [0];
  expect(result).toEqual(expected);
});
