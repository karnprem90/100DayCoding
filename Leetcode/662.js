/**
 * Given the root of a binary tree, return the maximum width of the given tree.
 *
 * The maximum width of a tree is the maximum width among all levels.
 *
 * The width of one level is defined as the length between the end-nodes (the leftmost and rightmost non-null nodes), where the null nodes between the end-nodes that would be present in a complete binary tree extending down to that level are also counted into the length calculation.
 *
 * It is guaranteed that the answer will in the range of a 32-bit signed integer.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: root = [1,3,2,5,3,null,9]
 * Output: 4
 * Explanation: The maximum width exists in the third level with length 4 (5,3,null,9).
 * Example 2:
 *
 *
 * Input: root = [1,3,2,5,null,null,9,6,null,7]
 * Output: 7
 * Explanation: The maximum width exists in the fourth level with length 7 (6,null,null,null,null,null,7).
 * Example 3:
 *
 *
 * Input: root = [1,3,2,5]
 * Output: 2
 * Explanation: The maximum width exists in the second level with length 2 (3,2).
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
var widthOfBinaryTree = function(root) {
    let x = {};
    let queue = [{node: root, position: 0}];
    let levelPositions = {};
    let maxWidth = -Infinity;
    while (queue.length > 0) {
        let levelSize = queue.length;
        let minPos = Infinity, maxPos = -Infinity;

        for (let i = 0; i < levelSize; i++) {
            let current = queue.shift();
            let {node, position} = current;

            minPos = Math.min(minPos, position);
            maxPos = Math.max(maxPos, position);
            let width = maxPos - minPos + 1;
            maxWidth = Math.max(maxWidth, width);

            if (node.left) {
                queue.push({node: node.left, position: 2 * position + 1});
            }
            if (node.right) {
                queue.push({node: node.right, position: 2 * position + 2});
            }
        }

    }

    return maxWidth;
};

const root = new TreeNode(1);
root.left = new TreeNode(3);
root.right = new TreeNode(2);
root.left.left = new TreeNode(5);
root.left.right = new TreeNode(3);
root.right.right = new TreeNode(9);
// root.left.left.left = new TreeNode(6);
// root.right.right.left = new TreeNode(7);

console.log(widthOfBinaryTree(root));
