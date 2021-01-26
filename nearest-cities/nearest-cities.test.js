import getNearestCities from './nearest-cities';
import getNearestCities2 from './nearest-cities.v2';

test('test1', () => {
  const cities = ['c1', 'c2', 'c3'];
  const xCoordinates = [3, 2, 1];
  const yCoordinates = [3, 2, 3];
  const queries = ['c1', 'c2', 'c3'];
  const expected = getNearestCities(cities, xCoordinates, yCoordinates, queries);
  const result = ['c3', null, 'c1'];
  expect(expected).toEqual(result);
});

test('test2', () => {
  const cities = ['green', 'red', 'blue', 'yellow', 'pink'];
  const xCoordinates = [100, 200, 300, 400, 500];
  const yCoordinates = [100, 200, 300, 400, 500];
  const queries = ['green', 'red', 'blue', 'yellow', 'pink'];
  const expected = getNearestCities(cities, xCoordinates, yCoordinates, queries);
  const result = [null, null, null, null, null];
  expect(expected).toEqual(result);
});

test('test3', () => {
  const cities = ['c1', 'c2', 'c3'];
  const xCoordinates = [3, 2, 1];
  const yCoordinates = [3, 2, 3];
  const queries = ['c1', 'c2', 'c3'];
  const expected = getNearestCities2(cities, xCoordinates, yCoordinates, queries);
  const result = ['c3', null, 'c1'];
  expect(expected).toEqual(result);
});

test('test4', () => {
  const cities = ['green', 'red', 'blue', 'yellow', 'pink'];
  const xCoordinates = [100, 200, 300, 400, 500];
  const yCoordinates = [100, 200, 300, 400, 500];
  const queries = ['green', 'red', 'blue', 'yellow', 'pink'];
  const expected = getNearestCities2(cities, xCoordinates, yCoordinates, queries);
  const result = [null, null, null, null, null];
  expect(expected).toEqual(result);
});
