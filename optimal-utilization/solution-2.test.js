import getPairs from './solution-2';

test(`a = [[1, 2], [2, 4], [3, 6]]
    b = [[1, 2]]
    target = 7
    Output: [[2, 1]]`, () => {
  const a = [
    [1, 2],
    [2, 4],
    [3, 6],
  ];
  const b = [[1, 2]];
  const target = 7;
  const result = getPairs(a, b, target).sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  const expected = [[2, 1]].sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  expect(result).toEqual(expected);
});

test(`a = [[1, 3], [2, 5], [3, 7], [4, 10]]
    b = [[1, 2], [2, 3], [3, 4], [4, 5]]
    target = 10
    Output: [[2, 4], [3, 2]]`, () => {
  const a = [
    [1, 3],
    [2, 5],
    [3, 7],
    [4, 10],
  ];
  const b = [
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
  ];

  const target = 10;
  const result = getPairs(a, b, target)
    .sort((a, b) => a[0] - b[0] || a[1] - b[1])
    .sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  const expected = [
    [2, 4],
    [3, 2],
  ].sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  expect(result).toEqual(expected);
});

test(`a = [[1, 8], [2, 7], [3, 14]]
    b = [[1, 5], [2, 10], [3, 14]]
    target = 20
    Output: [[3, 1]]`, () => {
  const a = [
    [1, 8],
    [2, 7],
    [3, 14],
  ];
  const b = [
    [1, 5],
    [2, 10],
    [3, 14],
  ];

  const target = 20;
  const result = getPairs(a, b, target)
    .sort((a, b) => a[0] - b[0] || a[1] - b[1])
    .sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  const expected = [[3, 1]].sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  expect(result).toEqual(expected);
});

test(`a = [[1, 8], [2, 15], [3, 9]]
    b = [[1, 8], [2, 11], [3, 12]]
    target = 20
    Output: [[1, 3], [3, 2]]`, () => {
  const a = [
    [1, 8],
    [2, 15],
    [3, 9],
  ];
  const b = [
    [1, 8],
    [2, 11],
    [3, 12],
  ];

  const target = 20;
  const result = getPairs(a, b, target)
    .sort((a, b) => a[0] - b[0] || a[1] - b[1])
    .sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  const expected = [
    [1, 3],
    [3, 2],
  ].sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  expect(result).toEqual(expected);
});
