import getHighestTenure from './highest-tenure';

class TreeNode {
  constructor(val, children) {
    this.val = val || null;
    this.children = children || [];
  }
}

test('test1', () => {
  const tree = new TreeNode(20);
  for (let child of [12, 18]) {
    tree.children.push(new TreeNode(child));
  }
  for (let child of [11, 2, 3]) {
    tree.children[0].children.push(new TreeNode(child));
  }
  for (let child of [15, 8]) {
    tree.children[1].children.push(new TreeNode(child));
  }
  const result = getHighestTenure(tree);
  const expected = 18;
  expect(result).toBe(expected);
});
