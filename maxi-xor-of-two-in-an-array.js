function makeTrie(nums) {
  const root = {};
  for (let num of nums) {
    let cur = root;
    for (let i = 30; i >= 0; i--) {
      const bit = (num >> i) & 1;
      cur[bit] = cur[bit] || {};
      cur = cur[bit];
    }
  }
  return root;
}

function search(trie, num) {
  let xor = 0;
  let node = trie;
  for (let i = 30; i >= 0; i--) {
    const bit = (num >> i) & 1;
    if (node[1 - bit]) {
      xor += 2 ** i;
      node = node[1 - bit];
    } else {
      node = node[bit];
    }
  }
  return xor;
}

const nums = [3, 10, 5, 25, 2, 8];
const root = makeTrie(nums);
console.log(root);
