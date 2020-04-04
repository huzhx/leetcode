/**
 * @param {string[]} sentences
 * @param {number[]} times
 */
var AutocompleteSystem = function (sentences, times) {
  this.trie = new Trie();
  for (let i = 0; i < sentences.length; i++) {
    this.trie.insert(sentences[i], times[i]);
  }
  this.curSent = '';
};

/**
 * @param {character} c
 * @return {string[]}
 */
AutocompleteSystem.prototype.input = function (c) {
  if (c === '#') {
    this.trie.insert(this.curSent, 1);
    this.curSent = '';
    return [];
  } else {
    this.curSent += c;
    let result = this.trie.getWord(this.curSent);

    result = result
      .sort(function (a, b) {
        if (a.times > b.times) return -1;
        if (a.times < b.times) return 1;
        if (a.sentence > b.sentence) return 1;
        if (a.sentence < b.sentence) return -1;
      })
      .map((item) => {
        return item.sentence;
      });

    if (result.length > 3) {
      result = result.slice(0, 3);
    }

    return result;
  }
};

/**
 * prefix: store all the prefix letters of a sentence
 * make it convenient to return the whole sentence in the end
 */
class TrieNode {
  constructor(prefix) {
    this.children = {};
    this.isEnd = false;
    this.times = 0;
    this.prefix = prefix;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode('');
  }

  insert(word, times) {
    let curNode = this.root;
    for (let i = 0; i < word.length; i++) {
      let char = word[i];
      if (!(char in curNode.children)) {
        curNode.children[char] = new TrieNode(word.slice(0, i + 1));
      }
      curNode = curNode.children[char];
    }
    curNode['isEnd'] = true;
    curNode['times'] += times;
  }

  getWord(prefix) {
    let results = [];
    let curNode = this.root;
    for (let char of prefix) {
      if (char in curNode.children) {
        curNode = curNode.children[char];
      } else {
        results = [];
        return results;
      }
    }

    this.findAllChildWords(curNode, results);
    return results;
  }

  /**
   * result item: {sentence, times}
   */
  findAllChildWords(curNode, results) {
    if (curNode.isEnd) {
      results.push({ sentence: curNode.prefix, times: curNode.times });
    }

    for (let key of Object.keys(curNode.children)) {
      this.findAllChildWords(curNode.children[key], results);
    }
  }
}

/**
 * Your AutocompleteSystem object will be instantiated and called as such:
 * var obj = new AutocompleteSystem(sentences, times)
 * var param_1 = obj.input(c)
 */
