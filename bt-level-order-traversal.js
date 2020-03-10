function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var levelOrder = function(root) {
  if (!root) return [];
  const answer = [];
  const queue = [root];

  while (queue.length) {
    const level = [];
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const cur = queue.shift();
      level.push(cur.val);
      if (cur.left) queue.push(cur.left);
      if (cur.right) queue.push(cur.right);
    }
    answer.push(level);
  }
  return answer;
};

const node = new TreeNode(3);
node.left = new TreeNode(9);
node.right = new TreeNode(20);
node.right.left = new TreeNode(15);
node.right.right = new TreeNode(7);

levelOrder(node);