import findSecretFruitList from './secret-fruit-list';

test('test1', () => {
  const customerPurchasedList = ['orange', 'mongo', 'strawberry', 'watermelon', 'mongo'];
  const secretFruitLists = [
    ['orange', 'mongo'],
    ['watermelon', 'mongo'],
  ];
  const result = findSecretFruitList(customerPurchasedList, secretFruitLists);
  expect(result).toBeTruthy();
});

test('test2', () => {
  const customerPurchasedList = ['watermelon', 'orange', 'mongo'];
  const secretFruitLists = [['watermelon', 'anything', 'mongo']];
  const result = findSecretFruitList(customerPurchasedList, secretFruitLists);
  expect(result).toBeTruthy();
});

test('test3', () => {
  const customerPurchasedList = ['watermelon', 'apple', 'orange', 'mongo'];
  const secretFruitLists = [['watermelon', 'anything', 'mongo']];
  const result = findSecretFruitList(customerPurchasedList, secretFruitLists);
  expect(result).toBeFalsy();
});
