let a = [
  [1, 3],
  [2, 5],
  [4, 10],
  [3, 7],
];
let b = [
  [1, 5],
  [3, 2],
  [4, 5],
  [2, 3],
];
let target = 10;

let aVls = [];
let bVls = [];

let ans = [];

function byValue(a, b) {
  return a[1] - b[1];
}

a.sort(byValue);
b.sort(byValue);

console.log({ a, b });

let i = 0;
let j = b.length - 1;

let max = Number.MIN_VALUE;
let sum;

while (i < a.length && j >= 0) {
  sum = a[i][1] + b[j][1];
  console.log({ sum, i, j });
  if (sum > target) {
    j--;
  } else {
    if (sum >= max) {
      console.log({ sum, max });
      if (sum > max) {
        max = sum;
        ans = [];
      }
      ans.push([a[i][0], b[j][0]]);
      console.log(ans);
      let index = j - 1;
      let curVal = b[index + 1][1];
      console.log({ index });
      console.log(curVal);
      // Looking for the same val
      while (index >= 0 && b[index][1] === curVal) {
        console.log({
          bindex: b[index][1],
          curVal,
        });
        ans.push([a[i][0], b[index][0]]);
        index--;
      }
    }
    i++;
  }
}

console.log({ ans });
