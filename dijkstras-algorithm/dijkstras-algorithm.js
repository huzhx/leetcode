const dijkstrasAlg = (edges, start, end, nodes) => {
  const nodeToNexts = {};
  const minheap = new MinHeap();
  const distances = {};

  for (let node of nodes) {
    nodeToNexts[node] = [];
    if (node === start) {
      const heapnode = new HeapNode(node, 0);
      minheap.push(heapnode);
      distances[node] = 0;
    } else {
      distances[node] = Infinity;
    }
  }

  for (let [node1, node2, weight] of edges) {
    nodeToNexts[node1].push([node2, weight]);
  }

  while (minheap.length > 0) {
    const curNode = minheap.pop();
    const nexts = nodeToNexts[curNode.node];
    for (let next of nexts) {
      const [nextNode, distance] = next;
      const alternate = distance + distances[curNode.node];
      if (alternate < distances[nextNode]) {
        distances[nextNode] = alternate;
        minheap.push(new HeapNode(nextNode, alternate));
      }
    }
  }

  console.log({ distances });

  return distances[end];
};

class HeapNode {
  constructor(node, distance) {
    this.node = node;
    this.distance = distance;
  }
}

class MinHeap {
  constructor() {
    this.heap = [];
    this.length = 0;
  }

  push(node) {
    if (this.heap.length > this.length) {
      this.heap[this.length] = node;
    } else {
      this.heap.push(node);
    }
    this.length++;
    this.__float(this.length - 1);
  }

  __float(index) {
    const parent = ~~((index - 1) / 2);
    if (parent < 0) {
      return;
    } else if (this.heap[parent].distance > this.heap[index].distance) {
      const tmp = this.heap[parent];
      this.heap[parent] = this.heap[index];
      this.heap[index] = tmp;
      this.__float(parent);
    }
  }

  pop() {
    if (this.length === 1) {
      this.length--;
      return this.heap[0];
    } else if (this.length > 1) {
      const min = this.heap[0];
      this.heap[0] = this.heap[this.length - 1];
      this.length--;
      this.__sink(0);
      return min;
    }
  }

  __sink(index) {
    const left = index * 2 + 1;
    const right = index * 2 + 2;
    let min = index;
    if (left < this.length && this.heap[left].distance < this.heap[min].distance) {
      min = left;
    }
    if (right < this.length && this.heap[right].distance < this.heap[min].distance) {
      min = right;
    }
    if (min !== index) {
      const tmp = this.heap[min];
      this.heap[min] = this.heap[index];
      this.heap[index] = tmp;
      this.__sink(min);
    }
  }
}

export default dijkstrasAlg;
