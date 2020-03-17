function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const invertTree = function(root) {
  if (!root) return root;
  let left = invertTree(root.left);
  let right = invertTree(root.right);
  root.left = right;
  root.right = left;
  return root;
};

let node = new TreeNode(5);
node.left = new TreeNode(4);
node.left.left = new TreeNode(3);
node.left.left.left = new TreeNode(-1);
node.right = new TreeNode(7);
node.right.left = new TreeNode(2);
node.right.left.left = new TreeNode(9);

invertTree(node);
