import getMaxMinima from './find-the-maximum-available-disk-space';

test('test1', () => {
  const numComputer = 3;
  const hardDiskSpace = [8, 2, 4];
  const segmentLength = 2;
  const result = getMaxMinima(numComputer, hardDiskSpace, segmentLength);
  const expected = 2;
  expect(result).toBe(expected);
});
