/**
 * Given a binary tree root, a node X in the tree is named good if in the path from root to X there are no nodes with a value greater than X.
 *
 * Return the number of good nodes in the binary tree.
 *
 *
 *
 * Example 1:
 *
 *
 *
 * Input: root = [3,1,4,3,null,1,5]
 * Output: 4
 * Explanation: Nodes in blue are good.
 * Root Node (3) is always a good node.
 * Node 4 -> (3,4) is the maximum value in the path starting from the root.
 * Node 5 -> (3,4,5) is the maximum value in the path
 * Node 3 -> (3,1,3) is the maximum value in the path.
 * Example 2:
 *
 *
 *
 * Input: root = [3,3,null,4,2]
 * Output: 3
 * Explanation: Node 2 -> (3, 3, 2) is not good, because "3" is higher than it.
 * Example 3:
 *
 * Input: root = [1]
 * Output: 1
 * Explanation: Root is considered as good.
 *
 *
 * Constraints:
 *
 * The number of nodes in the binary tree is in the range [1, 10^5].
 * Each node's value is between [-10^4, 10^4].
 */


function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var goodNodes = function(root) {
    let count = 0;
    function traverse(node, prevVal) {
        if (!node) {
            return 0;
        }
        if (node.val >= prevVal) {
            count++;
        }
        traverse(node.left, Math.max(prevVal, node.val));
        traverse(node.right, Math.max(prevVal,node.val));
    }
    traverse(root, root.val);
    return count;
};

let root = new TreeNode(3);
root.left = new TreeNode(1);
root.right = new TreeNode(4);
root.left.left = new TreeNode(3);
root.right.left = new TreeNode(1);
root.right.right = new TreeNode(5);

let root1 = new TreeNode(3);
root1.left = new TreeNode(3);
root1.left.left = new TreeNode(4);
root1.left.right = new TreeNode(2);

console.log(goodNodes(root1));