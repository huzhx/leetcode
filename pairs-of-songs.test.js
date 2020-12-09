const numPairsDivisibleBy60 = require('./pairs-of-songs');

test('[30,20,150,100,40] => 3', () => {
  const result = numPairsDivisibleBy60([30,20,150,100,40]);
  const expected = 3;
  expect(result).toEqual(expected);
});

test('[60,60,60] => 3', () => {
  const result = numPairsDivisibleBy60([30,20,150,100,40]);
  const expected = 3;
  expect(result).toEqual(expected);
});
