import getProfit from './find-the-highest-profit';

test('test1', () => {
  const numSuppliers = 2;
  const inventory = [3, 5];
  const order = 6;
  const expected = 19;
  const result = getProfit(numSuppliers, inventory, order);
  expect(result).toBe(expected);
});

test('test2', () => {
  const numSuppliers = 5;
  const inventory = [2, 8, 4, 10, 6];
  const order = 20;
  const expected = 110;
  const result = getProfit(numSuppliers, inventory, order);
  expect(result).toBe(expected);
});
