
 function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
 }

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if (root === null) {
        return root;
    }
    if (root === p || root === q) {
        return root;
    }
    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);
    if (left !== null && right !== null) {
        return root;
    }
    return (left !== null ) ? left : right;
};

var root = new TreeNode(3);
let p = root.left = new TreeNode(5);
let q = root.right = new TreeNode(1);
root.left.left = new TreeNode(6);
root.left.right = new TreeNode(2);
root.left.right.left = new TreeNode(7);
root.left.right.right = new TreeNode(4);
root.right.left = new TreeNode(0);
root.right.right = new TreeNode(8);

console.log(lowestCommonAncestor(root, p, q))