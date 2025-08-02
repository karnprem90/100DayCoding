

 function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
 }

/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function (root) {
    let first = null;
    let second = null;
    let prev = null;
    if (!root) {
        return [];
    }
    function dfs(node, left, right) {
        if (!node) {
            return;
        }
        dfs(node.left);
        if (prev && prev.val > node.val) {
            if (!first) first = prev;
            second = node;
        }
        prev = node;
        dfs(node.right);
    }
    dfs(root);
    [first.val, second.val] = [second.val, first.val];
    return root;
};

var root = new TreeNode(1);
root.left = new TreeNode(3);
root.left.right = new TreeNode(2);
console.log(recoverTree(root));