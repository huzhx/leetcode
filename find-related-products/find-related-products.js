const findRelatedProduct = (arr) => {
  let max = 0;
  let output;

  while (arr.length) {
    let seen = new Set(arr.shift());
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        if (seen.has(arr[i][j])) {
          for (let j = 0; j < arr[i].length; j++) {
            seen.add(arr[i][j]);
          }
          arr.splice(i, 1);
          break;
        }
      }
    }
    if (seen.size > max) {
      max = seen.size;
      output = Array.from(seen);
    }
  }

  return output;
};

export default findRelatedProduct;
