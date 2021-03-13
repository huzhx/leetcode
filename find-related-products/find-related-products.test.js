import findRelatedProduct from './find-related-products';

test('test1', () => {
  const arr = [
    ['product1', 'product2', 'product3'],
    ['product5', 'product2'],
    ['product6', 'product7'],
    ['product8', 'product7'],
  ];
  const expected = ['product1', 'product2', 'product3', 'product5'];
  const result = findRelatedProduct(arr);
  expect(result.sort()).toEqual(expected.sort());
});

test('test2', () => {
  const arr = [
    ['product1', 'product2', 'product3'],
    ['product5', 'product6'],
    ['product7', 'product8'],
    ['product8', 'product7'],
  ];
  const expected = ['product1', 'product2', 'product3'];
  const result = findRelatedProduct(arr);
  expect(result.sort()).toEqual(expected.sort());
});

test('test3', () => {
  const arr = [['product1'], ['product5'], ['product7'], ['product7']];
  const expected = ['product1'];
  const result = findRelatedProduct(arr);
  expect(result.sort()).toEqual(expected.sort());
});

test('test3', () => {
  const arr = [
    ['product1', 'product2'],
    ['product5', 'product2'],
    ['product7', 'product2'],
    ['product7', 'product2'],
  ];
  const expected = ['product1', 'product2', 'product5', 'product7'];
  const result = findRelatedProduct(arr);
  expect(result.sort()).toEqual(expected.sort());
});
