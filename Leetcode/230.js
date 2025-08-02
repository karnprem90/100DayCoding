
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let values = [];

    function dfs(root) {
        if (values.length !== k) {
            if (root.left) {
                dfs(root.left);
            }
            values.push(root.val);
            if (root.right) {
                dfs(root.right);
            }
        }
    }

    dfs(root, k)
    return values[k - 1];
};

var root = new TreeNode(5);
root.left = new TreeNode(3);
root.right = new TreeNode(6);
root.left.left = new TreeNode(2);
root.left.right = new TreeNode(4);
root.left.left.left = new TreeNode(1);
console.log(kthSmallest(root, 3));