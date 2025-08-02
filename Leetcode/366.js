/**
 * Given the root of a binary tree, collect a tree's nodes as if you were doing this:
 *
 * Collect all the leaf nodes.
 * Remove all the leaf nodes.
 * Repeat until the tree is empty.
 *
 *
 * Example 1:
 *
 *
 * Input: root = [1,2,3,4,5]
 * Output: [[4,5,3],[2],[1]]
 * Explanation:
 * [[3,5,4],[2],[1]] and [[3,4,5],[2],[1]] are also considered correct answers since per each level it does not matter the order on which elements are returned.
 * Example 2:
 *
 * Input: root = [1]
 * Output: [[1]]
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
var findLeaves = function(root) {
    if (!root) return []
    let result = [];
    while(true) {
        let currentLeaves = [];
        let leafNodes = [];
        findCurrentLeaves(root, currentLeaves, leafNodes)

        if (currentLeaves.length === 0) break;

        result.push(currentLeaves);
        markAsRemoved(leafNodes);
    }
    return result;
};

function findCurrentLeaves(node, currentLeaves, leafNodes) {
    if (!node || node.removed) return;
    let leftChild = node.left && !node.left.removed ? node.left : null;
    let rightChild = node.right && !node.right.removed ? node.right : null;
    if (!leftChild && !rightChild) {
        currentLeaves.push(node.val);
        leafNodes.push(node);
        return;
    }
    if (leftChild) {
        findCurrentLeaves(leftChild, currentLeaves, leafNodes);
    }

    if (rightChild) {
        findCurrentLeaves(rightChild, currentLeaves, leafNodes);
    }
}

function markAsRemoved(leafNodes) {
    for (let node of leafNodes) {
        node.removed = true;
    }
}

var root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);

console.log(findLeaves(root));