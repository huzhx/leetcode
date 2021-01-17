import getInstanceNum from './utilization-checks';

test('test1', () => {
  const utils = [25, 23, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 76, 80];
  const instances = 2;
  const result = getInstanceNum(utils, instances);
  const expected = 2;
  expect(result).toBe(expected);
});

test('test2', () => {
  const utils = [30, 5, 4, 8, 19, 89];
  const instances = 5;
  const result = getInstanceNum(utils, instances);
  const expected = 3;
  expect(result).toBe(expected);
});

test('test3', () => {
  const utils = [30, 95, 4, 8, 19, 89];
  const instances = Math.pow(10, 8);
  const result = getInstanceNum(utils, instances);
  const expected = 2 * Math.pow(10, 8);
  expect(result).toBe(expected);
});

test('test4', () => {
  const utils = [30, 95];
  const instances = Math.pow(10, 8) + 1;
  const result = getInstanceNum(utils, instances);
  const expected = Math.pow(10, 8) + 1;
  expect(result).toBe(expected);
});

test('test5', () => {
  const utils = [30, 95, 4, 8, 19, 89];
  const instances = Math.pow(10, 8) + 1;
  const result = getInstanceNum(utils, instances);
  const expected = Math.ceil((Math.pow(10, 8) + 1) / 2);
  expect(result).toBe(expected);
});
