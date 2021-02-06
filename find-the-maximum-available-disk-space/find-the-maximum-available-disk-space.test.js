import getMaxMinima from './find-the-maximum-available-disk-space';

test('test1', () => {
  const numComputer = 3;
  const hardDiskSpace = [8, 2, 4];
  const segmentLength = 2;
  const result = getMaxMinima(numComputer, hardDiskSpace, segmentLength);
  const expected = 2;
  expect(result).toBe(expected);
});

test('test2', () => {
  const numComputer = 5;
  const hardDiskSpace = [8, 2, 4, 2, 4];
  const segmentLength = 2;
  const result = getMaxMinima(numComputer, hardDiskSpace, segmentLength);
  const expected = 2;
  expect(result).toBe(expected);
});

test('test3', () => {
  const numComputer = 9;
  const hardDiskSpace = [8, 2, 4, 2, 4, 1, 3, 5, 6];
  const segmentLength = 2;
  const result = getMaxMinima(numComputer, hardDiskSpace, segmentLength);
  const expected = 5;
  expect(result).toBe(expected);
});
