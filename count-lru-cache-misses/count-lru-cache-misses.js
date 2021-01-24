const countCacheMisses = (num, pages, maxCacheSize) => {
  const lru = new LRUCache(maxCacheSize);
  for (let i = 0; i < num; i++) {
    lru.request(pages[i]);
  }
  return lru.getMisses();
};

class LRUCache {
  constructor(size) {
    this.dequeue = [];
    this.size = size;
    this.misses = 0;
    this.contains = new Set();
  }

  request(page) {
    if (this.contains.has(page) === false) {
      this.misses++;
      this.dequeue.push(page);
      this.contains.add(page);
    } else {
      this.dequeue.push(page);

      for (let i = 0; i < this.dequeue.length; i++) {
        if (this.dequeue[i] === page) {
          this.dequeue.splice(i, 1);
          break;
        }
      }
    }
    if (this.dequeue.length > this.size) {
      const page = this.dequeue.shift();
      this.contains.delete(page);
    }
  }

  getMisses() {
    return this.misses;
  }
}

export default countCacheMisses;
