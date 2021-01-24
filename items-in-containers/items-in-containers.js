const getItems = (s, startIndices, endIndices) => {
  const output = new Array(startIndices.length);

  const left = new Array(s.length);
  const right = new Array(s.length);

  let closeIdx = null;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === '|') closeIdx = i;
    right[i] = closeIdx;
  }

  closeIdx = null;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '|') closeIdx = i;
    left[i] = closeIdx;
  }

  for (let i = 0; i < startIndices.length; i++) {
    const start = startIndices[i];
    const end = endIndices[i];
    const startIdx = right[start - 1];
    const endIdx = left[end - 1];
    output[i] = getCount(startIdx, endIdx, s);
  }

  return output;

  function getCount(startIdx, endIdx, s) {
    if (startIdx === null || endIdx === null || startIdx >= endIdx) return 0;
    let count = 0;
    for (let i = startIdx + 1; i < endIdx; i++) {
      count += s[i] === '*' ? 1 : 0;
    }
    return count;
  }
};

export default getItems;
