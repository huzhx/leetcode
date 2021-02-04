import getShortestDistance from './squared-shortest-distance';

test('test1', () => {
  const numRobots = 3;
  const positionX = [2, 1, 0];
  const positionY = [4, 1, 0];
  const expected = 2;
  const result = getShortestDistance(numRobots, positionX, positionY);
  expect(result).toBe(expected);
});

test('test2', () => {
  const numRobots = 3;
  const positionX = [2, 0, 0];
  const positionY = [3, 0, 0];
  const expected = 13;
  const result = getShortestDistance(numRobots, positionX, positionY);
  expect(result).toBe(expected);
});

test('test3', () => {
  const numRobots = 5;
  const positionX = [2, 2, 0, 0, 1];
  const positionY = [4, 3, 0, 0, 1];
  const expected = 1;
  const result = getShortestDistance(numRobots, positionX, positionY);
  expect(result).toBe(expected);
});

test('test4', () => {
  const numRobots = 5;
  const positionX = [2, 2, 0, 0, 1];
  const positionY = [10, 3, 0, 0, 1];
  const expected = 2;
  const result = getShortestDistance(numRobots, positionX, positionY);
  expect(result).toBe(expected);
});
