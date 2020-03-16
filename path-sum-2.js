function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const pathSum = function(root, sum) {
  let allPaths = [];
  helper(root, sum, [], allPaths);
  return allPaths;
};

function helper(curNode, restVal, curPath, allPaths) {
  if (!curNode) return;

  curPath.push(curNode.val);

  if (!curNode.left && !curNode.right && curNode.val === restVal) {
    allPaths.push(curPath.slice());
  } else {
    helper(curNode.left, restVal - curNode.val, curPath, allPaths);
    helper(curNode.right, restVal - curNode.val, curPath, allPaths);
  }

  curPath.pop();
}

let root = new TreeNode(5);
root.left = new TreeNode(4);
root.right = new TreeNode(8);
root.left.left = new TreeNode(11);
root.right.left = new TreeNode(13);
root.right.right = new TreeNode(4);
root.left.left.left = new TreeNode(7);
root.left.left.right = new TreeNode(2);
root.right.right.left = new TreeNode(5);
root.right.right.right = new TreeNode(1);

pathSum(root, 22);
