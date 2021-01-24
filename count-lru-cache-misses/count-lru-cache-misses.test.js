import countCacheMisses from './count-lru-cache-misses';

test('test1', () => {
  const num = 6;
  const pages = [1, 2, 1, 3, 1, 2];
  const maxCacheSize = 2;
  const result = countCacheMisses(num, pages, maxCacheSize);
  const expected = 4;
  expect(result).toBe(expected);
});

test('test2', () => {
  const num = 6;
  const pages = [1, 2, 1, 3, 1, 2];
  const maxCacheSize = 3;
  const result = countCacheMisses(num, pages, maxCacheSize);
  const expected = 3;
  expect(result).toBe(expected);
});
