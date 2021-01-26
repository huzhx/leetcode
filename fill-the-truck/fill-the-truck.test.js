import getMaxUnits from './fill-the-truck';

test('test1', () => {
  const boxes = [1, 2, 3];
  const unitsPerBox = [3, 2, 1];
  const truckSize = 3;
  const result = getMaxUnits(boxes, unitsPerBox, truckSize);
  const expected = 7;
  expect(result).toBe(expected);
});

test('test2', () => {
  const boxes = [1, 2, 3, 4];
  const unitsPerBox = [3, 2, 1, 5];
  const truckSize = 3;
  const result = getMaxUnits(boxes, unitsPerBox, truckSize);
  const expected = 7;
  expect(result).toBe(expected);
});

test('test3', () => {
  const boxes = [4, 2, 3, 7];
  const unitsPerBox = [5.5, 5, 5, 1];
  const truckSize = 5;
  const result = getMaxUnits(boxes, unitsPerBox, truckSize);
  const expected = 25;
  expect(result).toBe(expected);
});
