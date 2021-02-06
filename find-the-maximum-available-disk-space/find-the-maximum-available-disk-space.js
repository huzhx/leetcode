const getMaxMinima = (numComputer, hardDiskSpace, segmentLength) => {
  const dequeue = [];
  let max = -Infinity;

  let min = Infinity;
  let minIndex;

  let i;
  for (i = 0; i < segmentLength; i++) {
    min = Math.min(min, hardDiskSpace[i]);
    while (dequeue.length && hardDiskSpace[i] <= hardDiskSpace[dequeue[dequeue.length - 1]]) {
      dequeue.pop();
    }
    dequeue.push(i);
  }

  for (; i < numComputer; i++) {
    minIndex = dequeue[0];
    max = Math.max(max, hardDiskSpace[minIndex]);
    while (dequeue.length && dequeue[0] <= i - segmentLength) {
      dequeue.shift();
    }
    while (dequeue.length && hardDiskSpace[i] <= hardDiskSpace[dequeue[dequeue.length - 1]]) {
      dequeue.pop();
    }
    dequeue.push(i);
  }

  minIndex = dequeue[0];
  max = Math.max(max, hardDiskSpace[minIndex]);
  return max;
};

export default getMaxMinima;
