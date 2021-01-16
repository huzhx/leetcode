import isWinner from './fresh-promotion';

test('test1', () => {
  const codeList = [
    ['apple', 'apple'],
    ['banana', 'anything', 'banana'],
  ];
  const shoppingCart = ['orange', 'apple', 'apple', 'banana', 'orange', 'banana'];
  const result = isWinner(codeList, shoppingCart);
  const expected = 1;
  expect(result).toBe(expected);
});

test('test2', () => {
  const codeList = [
    ['apple', 'apple'],
    ['banana', 'anything', 'banana'],
  ];
  const shoppingCart = ['banana', 'orange', 'banana', 'apple', 'apple'];
  const result = isWinner(codeList, shoppingCart);
  const expected = 0;
  expect(result).toBe(expected);
});

test('test3', () => {
  const codeList = [
    ['apple', 'apple'],
    ['banana', 'anything', 'banana'],
  ];
  const shoppingCart = ['apple', 'banana', 'apple', 'banana', 'orange', 'banana'];
  const result = isWinner(codeList, shoppingCart);
  const expected = 0;
  expect(result).toBe(expected);
});

test('test4', () => {
  const codeList = [
    ['apple', 'apple'],
    ['apple', 'apple', 'banana'],
  ];
  const shoppingCart = ['apple', 'apple', 'apple', 'banana'];
  const result = isWinner(codeList, shoppingCart);
  const expected = 0;
  expect(result).toBe(expected);
});

test('test5', () => {
  const codeList = [
    ['apple', 'apple'],
    ['banana', 'anything', 'banana'],
  ];
  const shoppingCart = ['orange', 'apple', 'orange', 'apple', 'apple', 'banana', 'orange', 'banana'];
  const result = isWinner(codeList, shoppingCart);
  const expected = 1;
  expect(result).toBe(expected);
});
