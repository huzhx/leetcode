function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const inorderTraversal = function(root) {
  let ans = [];

  helper(root);

  function helper(node) {
    if (!node) return;
    helper(node.left);
    ans.push(node.val);
    helper(node.right);
  }

  return ans;
};

let node = new TreeNode(5);
node.left = new TreeNode(4);
node.left.left = new TreeNode(3);
node.left.left.left = new TreeNode(-1);
node.right = new TreeNode(7);
node.right.left = new TreeNode(2);
node.right.left.left = new TreeNode(9);

inorderTraversal(node);
