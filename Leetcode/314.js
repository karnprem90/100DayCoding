/**
 * Given the root of a binary tree, return the vertical order traversal of its nodes' values. (i.e., from top to bottom, column by column).
 *
 * If two nodes are in the same row and column, the order should be from left to right.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: root = [3,9,20,null,null,15,7]
 * Output: [[9],[3,15],[20],[7]]
 * Example 2:
 *
 *
 * Input: root = [3,9,8,4,0,1,7]
 * Output: [[4],[9],[3,0,1],[8],[7]]
 * Example 3:
 *
 *
 * Input: root = [1,2,3,4,10,9,11,null,5,null,null,null,null,null,null,null,6]
 * Output: [[4],[2,5],[1,10,9,6],[3],[11]]
 *
 *
 * Constraints:
 *
 * The number of nodes in the tree is in the range [0, 100].
 * -100 <= Node.val <= 100
 */


function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var verticalOrder = function(root) {
    let x = {};
    function helper(node, column) {
        if (!node) {
            return null;
        }
        if (x[column] && x[column].length > 0) {
            x[column].push(node.val);
        } else {
            x[column] = [];
            x[column].push(node.val);
        }
        let left = helper(node.left, column - 1);
        let right = helper(node.right, column + 1);
    }
    helper(root, 0);
    const sortedArray = Object.entries(x)
        .sort(([a], [b]) => Number(a) - Number(b))
        .map(([_, value]) => value);
    return sortedArray;
};

function verticalOrder(root) {
    if (!root) {
        return [];
    }
    let verticalOrders = {};
    let min = 0, max = 0;
    const queue = [[root, 0]];

    while (queue.length) {
        const [node, col] = queue.shift();
        if (!verticalOrders[col]) verticalOrders[col] = [];
        verticalOrders[col].push(node.val);
        min = Math.min(min, col);
        max = Math.max(max, col);
        if (node.left) {
            queue.push([node.left, col - 1]);
        }
        if (node.right) {
            queue.push([node.right, col + 1]);
        }
    }

    const result = [];
    for (let i = min; i < max + 1; i++) {
        if (verticalOrders[i]) {
            result.push(verticalOrders[i]);
        }
    }
    return result;
}

const root = new TreeNode(3);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

console.log(verticalOrder(root));