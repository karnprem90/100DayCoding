
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var longestConsecutive = function(root) {
    let maxConsecutive = -Infinity;
    function helper(node) {
        if (!node) {
            return 0;
        }
        let left = helper(node.left);
        let right = helper(node.right);
        return node.val;
    }

    helper(root);

};