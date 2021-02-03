import getPassTime from './turnstile';

test('test1', () => {
  const numCustomers = 4;
  const arrTime = [0, 0, 1, 5];
  const direction = [0, 1, 1, 0];
  const expected = [2, 0, 1, 5];
  const result = getPassTime(numCustomers, arrTime, direction);
  expect(result).toEqual(expected);
});

test('test2', () => {
  const numCustomers = 5;
  const arrTime = [0, 1, 1, 3, 3];
  const direction = [0, 1, 0, 0, 1];
  const expected = [0, 2, 1, 4, 3];
  const result = getPassTime(numCustomers, arrTime, direction);
  expect(result).toEqual(expected);
});
